import "@styles/index.css";
import "./main.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
