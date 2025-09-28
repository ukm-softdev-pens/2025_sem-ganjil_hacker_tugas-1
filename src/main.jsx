import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CounterInterface from "./Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterInterface />
  </StrictMode>
);
