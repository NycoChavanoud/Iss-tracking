import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import IssInfo from "./pages/IssInfo";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/iss-info" component={IssInfo} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
