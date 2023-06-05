import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  Cocktail,
  Error,
  Landing,
  Newsletter,
  PageError,
} from "./pages";
import { loader as loaderLanding } from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <PageError />,
        loader: loaderLanding,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
