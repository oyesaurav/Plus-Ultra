import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../../css/styles.css"

export default function Nav() {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      const linksWidth = linksRef.current.getBoundingClientRect().width;

      if (showLinks && linksWidth < 375) {
        linksRef.current.style.visibility = `visible`
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else if(!showLinks && linksWidth < 375) {
        linksRef.current.style.visibility = `hidden`
        linksContainerRef.current.style.height = '0px';
      }
    }, [showLinks]);
    
    return (
        <div className="navbar">

            <h2 id="logo">Plus Ultra <button onClick={toggleLinks}>
              {!showLinks ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
              </button></h2> 

            <div className="nav-list" ref={linksContainerRef}>
                <ul id="nav-links" ref={linksRef}>
                    {/* eslint-disable-next-line */}
                    <li>
                      <Link to="">Home</Link>
                    </li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">About Us</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">Contact Us</a></li>
                    {/* eslint-disable-next-line */}
                    <li>
                      <Link to="/students">Students</Link>
                    </li>
                    <li style={{fontSize: "2rem", padding: "0 10px", margin:"0"}}>
                      <Link to="/login">
                        <i className="fas fa-user-circle"></i>
                      </Link>
                    </li>
                </ul>
                {/* <div id="signup">Sign Up</div> */}
            </div>

         </div>
    )
}