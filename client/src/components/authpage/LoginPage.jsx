import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage () {

    return(
    <div className="login">
         <p className="sign" align="center">Log in</p>
        <form className="form1">
           <input className="un " type="text" placeholder="Username" />
           <input className="pass" type="password" placeholder="Password" />
           <button type="submit" className="submit" align="center">Log in</button>

           <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
           <p align="center">
               <Link to="signup">Make an account first?</Link>
            </p>
        </form>  
                
    </div>
    )
}