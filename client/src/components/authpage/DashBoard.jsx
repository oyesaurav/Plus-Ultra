// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import { Link, useHistory } from 'react-router-dom'
import Footer from '../Footer'
// eslint-disable-next-line
import Axios from 'axios'
// import './css/styles.css'

export default function DashBoard({match:{params:{id}}}) {
    
    // const [userName, setUserName] = useState("")
    // const [Email, setEmail] = useState("")
    const [disableInput, setDisableInput] = useState(true)
    const [userData, setUserData] = useState({
        username: "", email: ""
    })
    
    // const {username: u, email: e} = userData

    useEffect(() => {
        fetch(`/dashboard/${id}`)
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            setUserData({
                ...userData,
                username: res.username,
                email: res.email
            })
        })
    }, [id])
    // , [id] DEPENDENCY ARRAY IN useEffect()
    const save = () => {
        Axios({
            method: "POST",
            data: {
                username: userData.username,
                email: userData.email
            },
            withCredentials: true,
            url: `http://localhost:5000/${userData.username}`,
        }).then(res => console.log(res))
    }

    return (
        <div>
            <h1>{id}'s DashBoard</h1>

            <span>
                <input disabled={disableInput} onChange={e => {
                    setUserData({
                        ...userData,
                        username: e.target.value
                    })
                }} type="text" value={userData.username} /> <br />
                <input disabled={disableInput} onChange={e => {
                    setUserData({
                        ...userData,
                        email: e.target.value
                    })
                }} type="text" value={userData.email} /> <br />
            </span>

            {/* <Link to="editprofile">Edit profile<br /></Link> */}
            <br /><button onClick={() => {
                setDisableInput(false)
            }}>Edit profile</button>
            <br /><br />
            <button onClick={() => {
                setDisableInput(true)
                save()
                console.log(userData);
            }}>Save changes</button>
            <br /><br />

            <Link to="logout">Logout</Link>

            <div  className="container-home"><Footer /></div>
        </div>
    )
}
