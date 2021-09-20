import React from "react";
import Footer from "../Footer";
// import Nav from "./navbar";
import Notice from "./Notice";
import { BrowserRouter, Route, Switch, Link, } from "react-router-dom";
import Table from "./table";
import ContactUs from "./ContactUs";

export default function Home() {


    return (
        <BrowserRouter>
        <div className="container-home">

            {/* <Nav /> */}

            <div className="homeBg"></div>
            <hr />
            <h1>WELCOME</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore sit saepe eos incidunt, magni eaque praesentium dolor modi impedit laborum, repellat, officiis dolorem aliquid repellendus odio quasi cumque quaerat porro ex pariatur beatae ipsam?</p>
        
            <p className="buttons">
              <Link to="/">
                <button id="notice-button">Notice</button>
              </Link>
              <Link to="/timetable">
              <button id="time-table-button">Time Table</button>
              </Link>
            </p>
            <div className="container-notice">
                <Switch>
                 <Route exact path="/" component={Notice} />
                 <Route path="/timetable" component={Table} />
                </Switch>
            </div>
            <ContactUs />
            <Footer />
        </div>
        </BrowserRouter>
        
    )
}
