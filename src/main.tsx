import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./routes/homepage/Homepage";
import DashboardPage from "./routes/dashboardPage/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage />
    ),
  },
  {
    path: "/dashboard",
    element: (<DashboardPage />),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);