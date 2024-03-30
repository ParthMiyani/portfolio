import "./App.css";
import "./fonts/CovikSans/CovikSansDemo-Regular.otf";
import { CssBaseline } from "@mui/material";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Photography from "./components/views/Photography";
import ErrorPage from "./components/views/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/portfolio",
        element: <Home />,
      },
      {
        path: "/portfolio/about",
        element: <About />,
      },
      {
        path: "/portfolio/photography",
        element: <Photography />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
