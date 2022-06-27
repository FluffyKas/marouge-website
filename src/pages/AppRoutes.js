import {
  About,
  Catalogue,
  Order,
  ProductPage
} from "./";

export const AppRoutes = [
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/katalogus",
    element: <Catalogue />,
  },
  {
    path: "/rendeles",
    element: <Order />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
];