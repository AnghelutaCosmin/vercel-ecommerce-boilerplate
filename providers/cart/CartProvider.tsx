"use client";

import { CartItem } from "@/types/cartTypes";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "./cartReducer";

const STORAGE_KEY = "cart";

export interface CartState {
  items: CartItem[];
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  ready: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isInitialized, setIsInitialized] = useState(false);

  const itemCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const subtotal = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  useEffect(() => {
    try {
      const storedCart = sessionStorage.getItem(STORAGE_KEY);
      if (storedCart) {
        dispatch({ type: "INITIALIZE_CART", payload: JSON.parse(storedCart) });
      }
    } catch {
      sessionStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [isInitialized, state.items]);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        itemCount,
        subtotal,
        ready: isInitialized,
        addItem: (item) => dispatch({ type: "ADD_ITEM", payload: item }),
        removeItem: (productId) =>
          dispatch({ type: "REMOVE_ITEM", payload: { productId } }),
        updateQuantity: (productId, quantity) =>
          dispatch({
            type: "UPDATE_QUANTITY",
            payload: { productId, quantity },
          }),
        clearCart: () => dispatch({ type: "CLEAR_CART" }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
