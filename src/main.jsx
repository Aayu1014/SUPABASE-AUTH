import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="text-red-500 text-center pt-4 text-3xl">
      Heeloooo Everyone!
    </h1>
    <RouterProvider router={router} />
  </StrictMode>
);
