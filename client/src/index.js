import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css';

import Home from "./Pages/home/home"
import Timetable from "./components/table"


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="*">
      <h2>Error page</h2>
    </Route>
  </Switch>
  <Route path="/Timetable" component={Timetable} />
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
