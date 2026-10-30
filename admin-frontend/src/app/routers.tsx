import { createBrowserRouter } from "react-router";

import { MapsPage } from "@/modules/maps";

import { ROUTES } from "@/shared/constants/routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.MAPS,
    element: <MapsPage />,
  },
]);