import React from "react";
import { Counter } from "./features/counter/Counter";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import Details from "./components/Details";
import Login from "./components/Login";
function App() {
  return (
    <React.Fragment>
      <div className="content">
        <Router>
          <Header />
          <Switch>
            <Route path="/detail/:id">
              <Details />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
