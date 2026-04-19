import { cookies } from "next/headers";

export const CART_TOKEN_KEY = "cartToken";

export async function getCartToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(CART_TOKEN_KEY);
  if (!token) return null;
  return token.value;
}

export async function setCartToken(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(CART_TOKEN_KEY, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function clearCartToken() {
  const cookieStore = await cookies();
  cookieStore.delete(CART_TOKEN_KEY);
}
