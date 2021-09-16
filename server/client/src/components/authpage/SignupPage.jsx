import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

export default function SignupPage () {

    return(
        <div>
            <div className="login">
                <p className="sign" align="center">Sign up</p>
                <form className="form1">
                <input className="un " type="email" placeholder="Email" />
                <input className="pass" type="password" placeholder="Password" />
                <input className="pass" type="password" placeholder="Confirm Password" />
                <button type="submit" className="submit" align="center">Sign up</button>
                
                <p align="center" className="route">
                    <Link to="login">Already have an account?</Link>
                </p>
                </form>
            </div>
            <div  className="container-home"><Footer /></div>
        </div>
    )
}