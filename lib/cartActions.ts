"use server";

import { getCartToken, setCartToken } from "@/utils/cartUtils";
import {
  addItemToCart,
  createCart,
  removeItemFromCart,
  updateCartItemQuantity,
} from "./cartService";
import { refresh } from "next/cache";

export interface CartActionResult {
  success: boolean | undefined;
  message?: string;
  submittedAt?: number;
}

export async function getOrCreateToken(): Promise<string> {
  const token = await getCartToken();
  if (!token) {
    const newToken = await createCart();
    await setCartToken(newToken);
    return newToken;
  }
  return token;
}

export async function addItemToCartAction(
  prevState: CartActionResult,
  formData: FormData,
): Promise<CartActionResult> {
  const productId = formData.get("productId")?.toString();
  const quantity = Number(formData.get("quantity"));
  if (!productId) {
    return {
      success: false,
      message: "Failed to add item to the cart.",
      submittedAt: Date.now(),
    };
  }
  try {
    const token = await getOrCreateToken();
    await addItemToCart(token, {
      productId: productId,
      quantity: quantity || 1,
    });
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
    console.log(error);
    return;
  }
}

export async function updateCartItemQuantityAction(
  productId: string,
  quantity: number,
): Promise<void> {
  if (!productId) {
    return;
  }

  try {
    if (quantity === 0) {
      await removeItemFromCartAction(productId);
      return;
    }
    const token = await getOrCreateToken();
    await updateCartItemQuantity(token, { productId, quantity });
    refresh();
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}
