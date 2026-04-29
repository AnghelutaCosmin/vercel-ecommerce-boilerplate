"use server";

import {
  clearCartToken,
  getCartToken,
  setCartToken,
} from "@/utils/cartUtils";
import {
  addItemToCart,
  createCart,
  removeItemFromCart,
  updateCartItemQuantity,
} from "./cartService";
import { ApiError } from "./fetch";
import { refresh } from "next/cache";
import { getStockInfo } from "./productsService";

export interface CartActionResult {
  success: boolean | undefined;
  message?: string;
  submittedAt?: number;
}

function isMissingCartError(error: unknown): boolean {
  return error instanceof ApiError && error.status === 404;
}

async function createAndStoreCartToken(): Promise<string> {
  const newToken = await createCart();
  await setCartToken(newToken);
  return newToken;
}

export async function getOrCreateToken(): Promise<string> {
  const token = await getCartToken();
  if (token) return token;

  return createAndStoreCartToken();
}

export async function addItemToCartAction(
  prevState: CartActionResult,
  formData: FormData,
): Promise<CartActionResult> {
  const productId = formData.get("productId")?.toString();
  const quantity = Number(formData.get("quantity"));
  const slug = formData.get("slug")?.toString();

  if (!productId || !slug || !quantity || quantity < 1) {
    return {
      success: false,
      message: "Invalid quantity.",
      submittedAt: Date.now(),
    };
  }

  try {
    // Check on stock availability ad the moment of adding to the cart
    const stockInfo = await getStockInfo(slug);
    if (!stockInfo || !stockInfo.inStock) {
      return {
        success: false,
        message: "This item is currently unavailable.",
        submittedAt: Date.now(),
      };
    }

    if (quantity > stockInfo.stock) {
      return {
        success: false,
        message: `Only ${stockInfo.stock} left in stock.`,
        submittedAt: Date.now(),
      };
    }

    const payload = {
      productId: productId,
      quantity: quantity,
    };

    const token = await getOrCreateToken();

    try {
      await addItemToCart(token, payload);
    } catch (error) {
      if (!isMissingCartError(error)) {
        throw error;
      }

      const freshToken = await createAndStoreCartToken();
      await addItemToCart(freshToken, payload);
    }

    refresh();
    return {
      success: true,
      message: "Item correctly added to the cart",
      submittedAt: Date.now(),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to add item to the cart.",
      submittedAt: Date.now(),
    };
  }
}

export async function removeItemFromCartAction(
  productId: string,
): Promise<void> {
  if (!productId) {
    return;
  }
  try {
    const token = await getOrCreateToken();
    await removeItemFromCart(token, productId);
    refresh();
    return;
  } catch (error) {
    if (isMissingCartError(error)) {
      await clearCartToken();
      refresh();
      return;
    }

    console.log(error);
    return;
  }
}

export async function updateCartItemQuantityAction(
  productId: string,
  slug: string,
  quantity: number,
): Promise<void> {
  if (!productId || !slug || quantity < 0) {
    return;
  }

  try {
    if (quantity === 0) {
      await removeItemFromCartAction(productId);
      return;
    }
    const stockInfo = await getStockInfo(slug);
    if (!stockInfo || !stockInfo.inStock || quantity > stockInfo.stock) {
      return;
    }

    const token = await getOrCreateToken();
    await updateCartItemQuantity(token, { productId, quantity });
    refresh();
    return;
  } catch (error) {
    if (isMissingCartError(error)) {
      await clearCartToken();
      refresh();
      return;
    }

    console.log(error);
    return;
  }
}
