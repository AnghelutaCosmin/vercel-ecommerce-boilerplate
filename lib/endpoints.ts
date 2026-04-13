export const endpoints = {
  promotions: "/promotions",
  products: "/products",
  productsBySlug: (slug: string) => `/products/${slug}`,
  productStockBySlug: (slug: string) => `/products/${slug}/stock`,
};
