import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css';

import Home from "./components/homepage/home"
import Students from "./components/students/Studentpage"


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/home" component={Home} />
    <Route exact path="/" component={Home} />
    <Route exact path="/students" component={Students} />
    <Route>
      <h2>Error page</h2>
    </Route>
  </Switch>

</BrowserRouter>,
  document.getElementById('root')
);
