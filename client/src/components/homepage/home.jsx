import React from "react";
import Footer from "../Footer";
// import Nav from "./navbar";
import Notice from "./Notice";
import { BrowserRouter, Route, Switch, Link, } from "react-router-dom";
import Table from "./table";
import ContactUs from "./ContactUs";
import Nav from "./navbar";

export default function Home(props) {


    return (
        <div className="container-home">
            <Nav id={props.match.params.id} />
        <BrowserRouter>


            <div className="homeBg"></div>
            <hr />
            <h1>WELCOME {props.match.params.id}</h1>
            <p>{props.location.pathname}</p>
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
                  {props.location.pathname === "/" ? <Route exact path="/" component={Notice} /> : <Route exact path={`/home/${props.match.params.id}`} render={(properties) => <Notice username={props.match.params.id} />} />}
                 {/* <Route exact path="/" render={(properties) => <Notice username={props.match.params.id} />} /> */}
                 <Route path="/timetable" component={Table} />
                </Switch>
            </div>
            <ContactUs />
            <Footer />
        </BrowserRouter>
        </div>
        
    )
}
