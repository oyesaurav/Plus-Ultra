import React from "react";
import "../Css/styles.css"

class Nav extends React.Component {

   render() {
       return (
           <>
            <div className="container">
                <ul className="Logo">
                    <li><h2 className="name">Name</h2></li>
                </ul>    
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li>Information</li>
                    <li>Students</li>
                    <li>Login</li>
                </ul>
            </div>
            </div>
           </>
       )
   }
}

export default Nav