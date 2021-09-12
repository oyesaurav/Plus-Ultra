import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css';

import Home from "./components/homepage/Home"
// import Timetable from "./components/homepage/Table"


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="*">
      <h2>Error page</h2>
    </Route>
  </Switch>
  {/* <Route path="/Timetable" component={Timetable} /> */}
</BrowserRouter>,
  document.getElementById('root')
);
