import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

export default function LoginPage () {

    return(
        <div>
            <div className="login">

                <p className="sign" align="center">Log in</p>
                <form className="form1">
                <input className="un " type="text" placeholder="Username" />
                <input className="pass" type="password" placeholder="Password" />
                <button type="submit" className="submit" align="center">Log in</button>
                <div>
                    {/* eslint-disable-next-line */}
                    <p id="forgot" align="center"><a href="#">Forgot Password?</a></p>
                    <p id="make-account" align="center">
                        <Link to="signup">Sign Up</Link><br /><br />
                        <Link to="editprofile">Edit profile</Link>
                    </p>
                </div>
                </form>  
                
            </div>
            <div  className="container-home"><Footer /></div>
        </div>
    )
}