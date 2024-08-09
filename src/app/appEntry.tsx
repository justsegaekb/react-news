import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore";
import "@/shared/index.css";
import BaseLayout from "./layouts/BaseLayout";
import { ThemeProvider } from "./providers/context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BaseLayout />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
