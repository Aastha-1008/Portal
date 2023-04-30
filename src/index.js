import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-fhlxzeg0n4ifjhcz.us.auth0.com"
    clientId="yxhs3IFK1GI2y4W3803ztvWMvhH2xd8F"
    redirectUri={window.location.origin}
  >
      <App />
  </Auth0Provider>
);
