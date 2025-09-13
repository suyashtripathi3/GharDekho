import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
// import { MantineProvider } from "@mantine/core";
// import { redirect } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Auth0Provider
        domain="dev-fmhxba2otfai6a2c.us.auth0.com"
        clientId="TAjbDGo35nondhK9932YEsfrfc4z8hRA"
        authorizationParams={{
          // redirect_uri: "http://localhost:5173/",
          redirect_uri: "https://ghar-dekho-nu.vercel.app",
        }}
        audience="https://ghar-dekho-fwyq.vercel.app"
        // audience="https://ghar-dekho-website.vercel.app"
        scope="openid profile email"
        >
        <App />
      </Auth0Provider>
  </React.StrictMode>
);
