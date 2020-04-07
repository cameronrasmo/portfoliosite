import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { ScrollContextProvider } from "./ScrollContext.js";

ReactDOM.render(
    <ScrollContextProvider>
        <App />
    </ScrollContextProvider>,
    document.getElementById("root")
);
