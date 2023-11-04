import React from "react";
import ReactDOM from "react-dom/client";

import App from "./pages/App/App";
import { Main } from "./style.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main>
      <App />
    </Main>
  </React.StrictMode>
);
