import ProductPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductLayout from "../components/ProductLayout";

import { getProducts, getProductById } from "../api/product";

export const productRoutes = {
  path: "/product",
  Component: ProductLayout,
  children: [
    {
      index: true,
      Component: ProductPage,
      loader: getProducts,
    },
    {
      path: ":id",
      Component: ProductDetailPage,
      loader: getProductById,
    },
  ],
};
