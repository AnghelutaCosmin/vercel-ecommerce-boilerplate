import { Cart } from "@/types/cartTypes";
import { endpoints } from "./endpoints";
import { fetchWithAuth } from "./fetch";

interface UpdateCartPayload {
  productId: string;
  quantity: number;
}

export async function createCart(): Promise<string> {
  try {
    const response = await fetchWithAuth(endpoints.createCart, {
      method: "POST",
    });
    if (!response.success) {
      console.log(response);
      throw new Error("Failed to create cart");
    }
    return response.data.token;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create cart");
  }
}

export async function addItemToCart(
  token: string,
  payload: UpdateCartPayload,
): Promise<Cart | null> {
  const response = await fetchWithAuth(endpoints.addItemToCart, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "x-cart-token": token,
      "Content-Type": "application/json",
    },
  });
  if (!response.success) {
    throw new Error("Failed to add item to the cart!");
  }
  return response.data;
}

export async function getCart(token: string): Promise<Cart | null> {
  console.log("token", token);
  const response = await fetchWithAuth(endpoints.getCart, {
    method: "GET",
    headers: { "x-cart-token": token },
  });
  console.log(response);
  if (!response.success) {
    throw new Error("Failed to retrieve cart!");
  }
  return response.data;
}

export async function updateCartItemQuantity(
  token: string,
  payload: UpdateCartPayload,
): Promise<Cart | null> {
  const response = await fetchWithAuth(
    endpoints.updateCartItemQuantity(payload.productId),
    {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "x-cart-token": token,
        "Content-Type": "application/json",
      },
    },
  );
  if (!response.success) {
    throw new Error("Failed to add item to the cart!");
  }
  return response.data;
}

export async function removeItemFromCart(
  token: string,
  productId: string,
): Promise<Cart | null> {
  const response = await fetchWithAuth(
    endpoints.removeItemFromCart(productId),
    {
      method: "DELETE",
      headers: { "x-cart-token": token },
    },
  );
  if (!response.success) {
    throw new Error("Failed to remove item to the cart!");
  }
  return response.data;
}
