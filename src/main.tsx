import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";
import "./styles/reset.css";

import { RouterProvider } from "react-router-dom";
import router from "./routers/rout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
