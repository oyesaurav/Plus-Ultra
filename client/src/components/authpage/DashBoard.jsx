// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import { Link, useHistory,withRouter,Redirect} from 'react-router-dom'
import Footer from '../Footer'
// eslint-disable-next-line
import Axios from 'axios'
import {Auth} from './LoginPage'
// import './css/styles.css'

function DashBoard({match:{params:{id}}}) {
    
    const [disableInput, setDisableInput] = useState(true)
    const [userData, setUserData] = useState({
        id: "", username: "", email: ""
    })
    const currentData = {
        currentUsername: userData.username,
        currentEmail: userData.email
    }

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: "true",
            url: `https://plus-ultra-try.herokuapp.com/dash/${id}`
        })
        .then(res => res.data)
        .then(res => {
            // console.log(res);
            setUserData({
                ...userData,
                id: res.id,
                username: res.username,
                email: res.email
            })
        })
        // .then(board())
        // .then(window.location=`/dashboard/${userData.username}`)
        // window.location = `/dashboard/${userData.id}`
        // eslint-disable-next-line
    }, [])

    const save = () => {
        Axios({
            method: "POST",
            data: {
                username: userData.username,
                email: userData.email
            },
            withCredentials: true,
            url: `https://plus-ultra-try.herokuapp.com/updateProfile/${userData.id}`,
        }).then(res => console.log(res))
        .then(window.location = `/dashboard/${userData.username}`)
    }

    const logout = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "https://plus-ultra-try.herokuapp.com/logout"
        }).then(res => console.log(res))
        .then(Auth(false))
        .then(window.location="/login")
        
    }

    function board () {
        return (
            <>
            <h1>{userData.username}'s DashBoard</h1>
            <br /><br />
            {/* <button onClick={()=> console.log(userData.username)}>ss</button> */}
            <span>
                <input placeholder="username" 
                       disabled={disableInput} 
                       onChange={e => {
                            setUserData({
                                ...userData,
                                username: e.target.value
                            })
                        }} 
                        type="text" 
                        value={currentData.currentUsername}
                />
                <br />
                <input placeholder="email" 
                       disabled={disableInput} 
                       onChange={e => {
                            setUserData({
                                ...userData,
                                email: e.target.value
                            })
                        }} 
                        type="text" 
                        value={currentData.currentEmail} 
                    /> 
                <br />
            </span>

            {/* <Link to="editprofile">Edit profile<br /></Link> */}
            <br /><button onClick={() => {
                setDisableInput(false)
                // console.log(currentData);
            }}>Edit profile</button>

            <br />
            <br />

            <button onClick={() => {
                setDisableInput(true)
                save()
                // console.log(userData);
            }}>Save changes</button>
            <br /><br />

            {/* <Link to="logout">Logout</Link> */}
            <button onClick={logout}>Logout</button>

            <div className="container-home"><Footer /></div>    
            </>
        )
    }

    return (
        
        <div>
            {userData.username === "" ? <h2>Not authenticated</h2> : board()}
        </div> 
    )
}

export default withRouter(DashBoard)