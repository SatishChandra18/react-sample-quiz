import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Result from "./pages/result";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz/result" component={Result} />
        </div>
      </div>
    </Router>
  );
}
