import React from "react";
import Footer from "../Footer";
import Nav from "./Navbar";
import Notice from "./Notice";

export default function Home() {

    return (
        <div className="container-home">
            <Nav />
            <div className="homeBg"></div>
            <hr />
            <h1>WELCOME</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore sit saepe eos incidunt, magni eaque praesentium dolor modi impedit laborum, repellat, officiis dolorem aliquid repellendus odio quasi cumque quaerat porro ex pariatur beatae ipsam?</p>

            <div className="container-notice">
                <Notice />
                {/* <TimeTable /> */}
            </div>

            <Footer />
        </div>
    )
}