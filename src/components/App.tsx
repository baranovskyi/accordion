import React from "react";
import "./styles/App.css";
import store from "../state/store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Form";
import Acordeon from "./Acordeon";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ul className="navigation">
          <li>
            <Link to="/">Accordion</Link>
          </li>
          <li>
            <Link to="/addingItem">Add item</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/addingItem">
            <Form />
          </Route>
          <Route path="/">
            <Acordeon />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
