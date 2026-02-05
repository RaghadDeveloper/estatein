import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertiesSubscriber from "./components/subscribers/PropertiesSubscriber";
import TeamSubscriber from "./components/subscribers/TeamSubscriber";
import FirebaseAuthListener from "./components/subscribers/AuthListener";
// import Mouse from "./components/ui/Mouse";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <FirebaseAuthListener />
      <PropertiesSubscriber />
      <TeamSubscriber />
      <RouterProvider router={routes} />
      {/* <Mouse /> */}
    </Provider>
  </StrictMode>,
);
