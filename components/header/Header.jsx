import React from "react";
import ReactDOM from "react-dom";

import "./Header.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  HashRouter,
  Redirect,
} from "react-router-dom";

import Home from "../home/Home";

const Header = () => {
  return (
    <div className="headerContainer">
      <HashRouter>
        <div className="componentContainer">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/Home" component={Home} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
};

export default Header;
