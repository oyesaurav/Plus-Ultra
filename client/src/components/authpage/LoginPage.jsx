import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Axios from 'axios'

export default function LoginPage () {
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    
    function login() {
        Axios({
          method: "POST",
          data: {
            username: loginUsername,
            password: loginPassword
          },
          withCredentials: true,
          url: "http://localhost:5000/login",
        }).then((res) => console.log(res))
      }

    return(
        <div>
            <div className="login">

                <p className="sign" align="center">Log in</p>
                <form className="form1" method="post" action="../../login">
                    <input className="un " type="text" placeholder="username" onChange={(e) => setLoginUsername(e.target.value)} />
                    <input className="pass" type="password" placeholder="password" onChange={(e) => setLoginPassword(e.target.value)} />
                    <button type="submit" className="submit" align="center" onClick={login}>Log in</button>
                    <div>
                        {/* eslint-disable-next-line */}
                        <p id="forgot" align="center"><a href="#">Forgot Password?</a></p>
                        <p id="make-account" align="center">
                            <Link to="signup">Sign Up</Link><br /><br />
                            {/* <Link to="editprofile">Edit profile</Link> */}
                            <Link to="logout">Logout</Link>
                        </p>
                    </div>
                </form>  
                
            </div>
            <div  className="container-home"><Footer /></div>
        </div>
    )
}