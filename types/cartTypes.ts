import { Product } from "./productTypes";

export interface CartItem {
  productId: string;
  quantity: number;
  addedAt: string;
  product: Product;
  lineTotal: number;
}

export interface Cart {
  token: string;
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
}
