import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
const swiper = new Swiper(...);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
