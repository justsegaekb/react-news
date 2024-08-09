import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore";
import "@/shared/index.css";
import BaseLayout from "./layouts/BaseLayout";
import { ThemeProvider } from "./providers/context/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
