import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import ItemPage from "../../pages/ItemPage/ItemPage";
import ListPage from "../../pages/ListPage/ListPage";
import StatsPage from "../../pages/StatsPage/StatsPage";

const AppRoutesShell = () => <Outlet />;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoutesShell />,
    children: [
      {
        index: true,
        element: <Navigate to="/list" replace />,
      },
      {
        path: "list",
        element: <ListPage />,
      },
      {
        path: "item/:id",
        element: <ItemPage />,
      },
      {
        path: "stats",
        element: <StatsPage />,
      },
    ],
  },
]);
