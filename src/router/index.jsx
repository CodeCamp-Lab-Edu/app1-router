import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/Contact";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
    ],
  },
]);

export default router;
