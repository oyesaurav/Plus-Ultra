// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import { Link, useHistory } from 'react-router-dom'
import Footer from '../Footer'
// eslint-disable-next-line
import Axios from 'axios'
// import './css/styles.css'

export default function DashBoard({match:{params:{id}}}) {
    
    const [disableInput, setDisableInput] = useState(true)
    const [userData, setUserData] = useState({
        id: "", username: "", email: "", about: "",
        achievements: "",
        contact: "",
        skills: "",
    })
    const currentData = {
        currentUsername: userData.username,
        currentEmail: userData.email,
        currentAbout: userData.about,
        currentAcheivements: userData.achievements,
        currentContact: userData.contact,
        currentSkills: userData.skills
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
                email: res.email,
                about: res.about,
                achievements: res.achievements,
                contact: res.contact,
                skills: res.skills
            })
        })
        // eslint-disable-next-line
    }, [id])

    const save = () => {
        Axios({
            method: "POST",
            data: {
                username: userData.username,
                email: userData.email,
                about: userData.about,
                achievements: userData.achievements,
                contact: userData.contact,
                skills: userData.skills
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
        .then(window.location="/login")
    }

    function dashboard() {
        return (
        <>
         <h1>{userData.username}'s DashBoard</h1>
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
                <textarea
                       placeholder="About" 
                       disabled={disableInput} 
                       onChange={e => {
                            setUserData({
                                ...userData,
                                about: e.target.value
                            })
                        }}
                        rows="7"
                        cols="30"
                        type="text" 
                        value={currentData.currentAbout} 
                    /> 
                <br />
                <textarea placeholder="Achievements" 
                       disabled={disableInput} 
                       onChange={e => {
                            setUserData({
                                ...userData,
                                achievements: e.target.value
                            })
                        }} 
                        rows="7"
                        cols="30"
                        type="text" 
                        value={currentData.currentAcheivements} 
                    /> 
                <br />
                <input placeholder="contact"
                       disabled={disableInput} 
                       onChange={e => {
                            setUserData({
                                ...userData,
                                contact: e.target.value
                            })
                        }} 
                        type="text" 
                        value={currentData.currentContact} 
                    /> 
                <br />
                <textarea placeholder="text" 
                       disabled={disableInput} 
                       onChange={e => {
                            setUserData({
                                ...userData,
                                skills: e.target.value
                            })
                        }} 
                        rows="7"
                        cols="30"
                        type="text" 
                        value={currentData.currentSkills} 
                    /> 
                <br />
            </span>

            <br />
            <div id="buttons">
                <button onClick={() => {
                    setDisableInput(false)
                    // console.log(currentData);
                }}>Edit profile</button>

                <button onClick={() => {
                    setDisableInput(true)
                    save()
                    console.log(userData);
                }}>Save changes</button>

                
            </div>
            {/* <Link to="logout">Logout</Link> */}
            <button id="logout-button" onClick={logout}>Logout</button>
            

            <div className="container-home"><Footer /></div>
        </>

        )
    }

    return (
        <div  className="container-dashboard">
           {userData.username === "" ? <h2>Not authenticated</h2> : dashboard()}
        </div>
    )
}
