import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";

import Commics from "../components/commics"

import { history } from "../helpers";

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
					<Route path="/" exact component={Commics} /> />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
