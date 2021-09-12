import React, { useState, useRef, useEffect } from "react";
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

            <h2 id="logo">Name <button onClick={toggleLinks}>M</button></h2> 

            <div className="nav-list" ref={linksContainerRef}>
                <ul id="nav-links" ref={linksRef}>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">Home</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">About Us</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">Contacts</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">Students</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">Login</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">Sign Up</a></li>
                </ul>
                {/* <div id="signup">Sign Up</div> */}
            </div>

         </div>
    )
}