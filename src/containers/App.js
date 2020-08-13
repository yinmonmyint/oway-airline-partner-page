import React from "react";
import Home from "./Home";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PartnerPage from "./PartnerPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/partner/:partnerName">
          <PartnerPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;