import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { App } from "App";
import { Provider } from "react-redux";
import store from "redux/config/configStore";
import GlobalStyle from "Style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "Style/theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </StrictMode>
    </ThemeProvider>
  </Provider>
);
