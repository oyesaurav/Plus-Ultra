import React, { useState } from 'react'
// eslint-disable-next-line
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
// import { Link } from 'react-router-dom'
import Footer from '../Footer'
// import DashBoard from './DashBoard'
import Axios from 'axios'
import ProtectedRoute from '../ProtectedRoute'

 export function Auth(props) {
        return props
    }


export default function LoginPage () {
    
    // eslint-disable-next-line
    const [isLoggedIn, setLoggedIn] = useState()
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    
    const login = () => {
        Axios({
          method: "POST",
          data: {
            username: loginUsername,
            password: loginPassword
          },
          withCredentials: true,
          url: "http://localhost:5000/login",
        }).then((res) => {
            // console.log(res);
            if(res.data === "No user found") {
                setLoggedIn(false)
                // window.location="/login"
            } else {
                setLoggedIn(true)
                // window.location = "/"
                Auth(isLoggedIn)
                window.location=`/dashboard/${loginUsername}`
            
            }
        })
        
        
    }

   

    return(
        <div>
            
            <div className="login">

                <p className="sign" align="center">Log in</p>
                <span className="form1">
                    <input className="un " type="text" placeholder="username" onChange={(e) => setLoginUsername(e.target.value)} />
                    <input className="pass" type="password" placeholder="password" onChange={(e) => setLoginPassword(e.target.value)} />
                    
                    {isLoggedIn === false ? <p id="error-message">Incorrect username or password</p> : <p></p> }
                    <button className="submit" align="center" onClick={login}>Log in</button>
                    <div>
                        {/* eslint-disable-next-line */}
                        <p id="forgot" align="center"><a href="#">Forgot Password?</a></p>
                        <p id="make-account" align="center">
                            {/* {isLoggedIn ? <Link to="signup">Sign Up<br /></Link> : <Link to="editprofile">Edit profile<br /></Link>} */}
                            <Link to="signup">Sign Up<br /></Link>
                        </p>
                    </div>
                </span>  
                
            </div>
            
            <div  className="container-home"><Footer /></div>
        </div>
    )
}