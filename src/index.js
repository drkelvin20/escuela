import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-97bvgswy.us.auth0.com"
    clientId="VxzPGpX9umWvjpICaxSqtnxlh6tTHo7j"
    redirectUri={window.location.origin + process.env.PUBLIC_URL + '/'}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
