import { createBrowserRouter } from "react-router";
import About from "./components/About";
import Detail from "./components/Detail";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Testimony from "./components/Testimony";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home/:id",
        element: <Detail />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "testimony",
        element: <Testimony />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
