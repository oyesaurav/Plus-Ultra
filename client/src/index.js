import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css';

import Home from "./components/homepage/home"
import Students from "./components/students/Studentpage"
import App from './app';
import LoginPage from './components/authpage/LoginPage';
import SignupPage from './components/authpage/SignupPage';
import EditProfile from './components/students/EditProfile'
import Test from './components/Test'
import DashBoard from './components/authpage/DashBoard'
import ProtectedRoute from './components/ProtectedRoute';

ReactDOM.render(
  <BrowserRouter>
  <App />
  <Switch>
    <Route path="/home" component={Home} />
    <Route exact path="/" component={Home} />
    <Route path="/students" component={Students} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/editprofile" component={EditProfile} />
    <Route path="/helloServer" component={Test} />
    <ProtectedRoute path="/dashboard/:id" component={DashBoard} />
    <Route>
      <h2>Hey! you are in a wrong page...</h2>
    </Route>
  </Switch>

</BrowserRouter>,
  document.getElementById('root')
);
