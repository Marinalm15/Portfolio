import { Route, Routes } from "react-router-dom";
import App from "./src/assets/components/App";
import About from "./src/assets/components/About";
import PaginaInicial from "./src/assets/components/PaginaInicial";
import Work from "./src/assets/components/Work";

export function Router() {
    return (
        <Routes>
      <Route
        path="/"
        index
        element={
          <PaginaInicial/>
        }
      />

        <Route
        path="/about"
        index
        element={
          <About/>
        }
      />

      <Route
        path="/work"
        index
        element={
          <Work />
        }
      />
    </Routes>
    )
}