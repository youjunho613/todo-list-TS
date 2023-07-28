import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { App } from "App";
import { Provider } from "react-redux";
import store from "redux/config/configStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
