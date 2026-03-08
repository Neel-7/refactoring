import React from "react";
import * as ReactDOM from "react-dom/client";

const App = () => {
    return <div><h1>Pixel Perfect Pizzas</h1></div>;
};

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);
root.render(<App />);