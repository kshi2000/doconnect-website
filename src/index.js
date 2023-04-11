import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import AuthProvider from "./providers/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ChakraProvider>
);
