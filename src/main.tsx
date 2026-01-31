import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ThemeProvider } from "./context/ThemeContext";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
