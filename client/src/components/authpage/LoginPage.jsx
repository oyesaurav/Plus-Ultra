import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Axios from 'axios'

export default function LoginPage () {
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
          url: "https://plus-ultra-d6.herokuapp.com/login",
        }).then((res) => {
            // console.log(res);
            if(res.data === "No user found") {
                window.location="/login"
            } else {
                window.location="/"
            }
        })
    }

    const logout = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "https://plus-ultra-d6.herokuapp.com/logout",
          }).then(window.location="/")
    }

    return(
        <div>
            <div className="login">

                <p className="sign" align="center">Log in</p>
                <span className="form1">
                    <input className="un " type="text" placeholder="username" onChange={(e) => setLoginUsername(e.target.value)} />
                    <input className="pass" type="password" placeholder="password" onChange={(e) => setLoginPassword(e.target.value)} />
                    <button className="submit" align="center" onClick={login}>Log in</button>
                    <div>
                        {/* eslint-disable-next-line */}
                        <p id="forgot" align="center"><a href="#">Forgot Password?</a></p>
                        <p id="make-account" align="center">
                            <Link to="signup">Sign Up</Link><br /><br />
                            {/* <Link to="editprofile">Edit profile</Link> */}
                            <Link to="logout" onClick={logout}>Logout</Link>
                        </p>
                    </div>
                </span>  
                
            </div>
            <div  className="container-home"><Footer /></div>
        </div>
    )
}