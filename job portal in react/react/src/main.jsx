import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style.css";

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error?.message || "Unknown rendering error",
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ padding: "24px", color: "#4b0000" }}>
          <h1>App failed to render</h1>
          <p>{this.state.errorMessage}</p>
        </main>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found in index.html");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppErrorBoundary>
  </React.StrictMode>,
);
