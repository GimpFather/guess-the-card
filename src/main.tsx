import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "./coreFiles/theme.ts";
import { IntlProvider } from "react-intl";
import { CssBaseline } from "@mui/material";
import en_EN from "./coreFiles/en_EN.json";
import { ToastContainer } from "react-toastify";
import AppRouting from "./AppRouting.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <IntlProvider messages={en_EN} locale="en">
        <CssBaseline>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            limit={3}
            closeOnClick
            draggable
            pauseOnHover
            theme="light"
          />
          <BrowserRouter>
            <AppRouting />
          </BrowserRouter>
        </CssBaseline>
      </IntlProvider>
    </ThemeProvider>
  </StrictMode>
);
