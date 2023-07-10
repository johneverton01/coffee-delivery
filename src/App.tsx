import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";

import { CardContextProvider } from "./contexts/CardContext";
import { makeServer } from "./services/mirage";
if (import.meta.env.MODE === "development") {
  makeServer();
}

export function App() {
  return (
    <BrowserRouter>
      <CardContextProvider>
        <Router />
      </CardContextProvider>
    </BrowserRouter>
  );
}
