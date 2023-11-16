import { Route, Routes } from "react-router-dom";
import App from "./src/assets/App";
import About from "./src/assets/components/About";
import PaginaInicial from "./src/assets/components/PaginaInicial";
import Work from "./src/assets/components/Works";
import Contacts from "./src/assets/components/Contacts";
import JogoDaVelha from "./src/assets/components/Works/JogoDaVelha";

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

      <Route
        path="/contacts"
        index
        element={
          <Contacts />
        }
      />

      <Route
        path="/JogoDaVelha"
        index
        element={
          <JogoDaVelha />
        }
      />

<Route
        path="/Quizz"
        index
        element={
          <JogoDaVelha />
        }
      />

<Route
        path="/Calculadora"
        index
        element={
          <JogoDaVelha />
        }
      />

    </Routes>
    )
}