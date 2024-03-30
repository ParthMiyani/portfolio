import { Route, Router } from "react-router-dom";
import Home from "../components/views/Home";
import About from "../components/views/About";
import Photography from "../components/views/Photography";

import ErrorPage from "../components/views/ErrorPage";

export default function Routers() {
  return (
    <Router>
      <Route path="/" exact element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/about" element={<About />} errorElement={<ErrorPage />} />
      <Route
        path="/photography"
        element={<Photography />}
        errorElement={<ErrorPage />}
      />
    </Router>
  );
}
