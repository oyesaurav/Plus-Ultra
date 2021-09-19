// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import { Link, useHistory,withRouter} from 'react-router-dom'
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
        fetch(`/dashboard/${id}`)
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            setUserData({
                ...userData,
                id: res.id,
                username: res.username,
                email: res.email
            })
        })
        // eslint-disable-next-line
    }, [id])

    const save = () => {
        Axios({
            method: "POST",
            data: {
                username: userData.username,
                email: userData.email
            },
            withCredentials: true,
            url: `http://localhost:5000/updateProfile/${userData.id}`,
        }).then(res => console.log(res))
          .then(window.location = `/dashboard/${userData.username}`)
    }

    const logout = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/logout"
        }).then(res => console.log(res))
        .then(Auth(false))
        .then(window.location="/login")
        
    }

    function dashboard() {
        <>
        <h1>{userData.username}'s DashBoard</h1>
            <br /><br />
            <button onClick={()=> console.log(userData.username)}>ss</button>
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
                console.log(userData);
            }}>Save changes</button>
            <br /><br />

            {/* <Link to="logout">Logout</Link> */}
            <button onClick={logout}>Logout</button>

            <div className="container-home"><Footer /></div></>
    }

    return (
        
        <div>
                {userData.username === "" ? <h1>Error</h1> : <dashboard/>}
            
        </div> 
    )
}

export default withRouter(DashBoard)