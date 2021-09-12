import React from "react";
import Footer from "../Footer";
import Nav from "./Navbar";
import Notice from "./Notice";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Table from "./Table";

export default function Home() {

    return (
        <BrowserRouter>
        <div className="container-home">
            <Nav />
            <div className="homeBg"></div>
            <hr />
            <h1>WELCOME</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore sit saepe eos incidunt, magni eaque praesentium dolor modi impedit laborum, repellat, officiis dolorem aliquid repellendus odio quasi cumque quaerat porro ex pariatur beatae ipsam?</p>

            <p className="buttons">
            <button id="notice-button">
              <Link to="/">Notice</Link>
            </button>
            <button id="time-table-button">
              <Link to="/timetable">Time Table</Link>
            </button>
            </p>

            <div className="container-notice">
                <Switch>
                 <Route exact path="/" component={Notice} />
                 <Route path="/timetable" component={Table} />
                </Switch>
            </div>

            <Footer />
        </div>
        </BrowserRouter>
    )
}