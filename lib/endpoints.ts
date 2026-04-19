export const endpoints = {
  promotions: "/promotions",
  products: "/products",
  productsBySlug: (slug: string) => `/products/${slug}`,
  productStockBySlug: (slug: string) => `/products/${slug}/stock`,
  createCart: "/cart/create",
  getCart: "/cart",
  addItemToCart: "/cart",
  updateCartItemQuantity: (itemId: string) => `/cart/${itemId}`,
  removeItemFromCart: (itemId: string) => `/cart/${itemId}`,
};
