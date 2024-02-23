import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./tabs";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";


const routes = (

  <BrowserRouter>

    <Switch>

      <Route path="/home" component={Tabs} />

      <Redirect from="/" to="/home" />

    </Switch>

  </BrowserRouter>

);


ReactDOM.render(routes, document.getElementById("root"));
