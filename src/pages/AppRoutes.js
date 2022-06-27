import {
  About,
  Catalogue,
  Order
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
];