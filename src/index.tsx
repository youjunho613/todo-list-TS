import { App } from "App";
import GlobalStyle from "Style/GlobalStyle";
import { theme } from "Style/theme";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/config/configStore";
import { ThemeProvider } from "styled-components";

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
