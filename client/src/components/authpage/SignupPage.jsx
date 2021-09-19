import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Axios from 'axios'

export default function SignupPage () {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setemail] = useState("")

    function signup() {
        Axios({
          method: "POST",
          data: {
            email: email,  
            username: username,
            password: password
          },
          withCredentials: true,
          url: "https://plus-ultra-try.herokuapp.com/signup",
        }).then((res) => {
            if(res.data === "User exists") {
                window.location="/login"
            } if(res.data === "New User registered") {
                window.location="/"
            }
        })
      }

    return(
        <div>
            <div className="login">
                <p className="sign" align="center">Sign up</p>
                <span className="form1">
                    <input className="un " type="email" placeholder="email" onChange={(e) => setemail(e.target.value)} />
                    <input className="un " type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <input className="pass" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="submit" align="center" onClick={signup}>Sign up</button>
                
                <p align="center" className="route">
                    <Link to="login">Already have an account?</Link>
                </p>
                </span>
            </div>
            <div  className="container-home"><Footer /></div>
        </div>
    )
}