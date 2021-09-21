// eslint-disable-next-line
import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";
// eslint-disable-next-line
import { isCR } from "../authpage/DashBoard";
// eslint-disable-next-line
import { Redirect, Route, useHistory } from "react-router";
// import UpdateNotice from "./UpdateNotice";
import { Link } from "react-router-dom";
import { Auth } from "../authpage/LoginPage";

export default function Notice(props) {
  // eslint-disable-next-line
  const history = useHistory()
  const [newNotice, setNewNotice] = useState({ date: "", body: "" })
  const [noticeArr, setArr] = useState([])

  const addNotice = () => {
    Axios({
      method: "POST",
      data: {
        date: newNotice.date,
        body: newNotice.body
      },
      withCredentials: true,
      url: "http://localhost:5000/noticeboard",
    }).then(res => console.log(res))
    .then(window.location = "/")
  }

  useEffect(() => {
    fetch("/notice")
    .then(res => res.json())
    .then(res => {
      setArr(res.message)
      // res.message.map(item => (
      //   <p key={item._id} ref={element => arr.current.push(item)}>{item}</p>
      // ))
    })
  }, [])

  const update = (id) => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:5000/edit-notice/${id}`
    }).then(window.location = `/edit-notice/${id}`)
  }

  return (
    <div id="container-notice">

    <h1>Notice Board{props.username}</h1>

    {props.username === "B120044" ? <p>CR</p> : <p>Student</p>}

    <span>
      <input placeholder="date" type="text" onChange={e => setNewNotice({...newNotice, date: e.target.value})} />
      <textarea rows="7" placeholder="body" type="text" onChange={e => setNewNotice({...newNotice, body: e.target.value})} />
      <button onClick={addNotice}>Add</button>
    </span>
    

    <div className="notice-div">
      <ul>
        {noticeArr.map(n => {
          return (
          <li key={n._id}>
            <span>{n.date}</span>
            <button style={{float: "right"}} onClick={() => {
              Axios({
                method: "POST",
                withCredentials: true,
                url: `http://localhost:5000/delete-notice/${n._id}`
              }).then(window.location = "/")
            }}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <button style={{right: "25px"}}
              onClick={() => {
                update(n._id)
              }}
            >
              
              {/* <a href={`edit-notice/${n._id}`}> */}
              <Link to={`edit-notice/${n._id}`}><i className="fas fa-edit" style={{float: "right"}}></i></Link>
              {/* </a> */}
              {/* <Redirect to={`update-notice/${n._id}`} /> */}
            </button>
            <span>{n.body}</span>
            
          </li>)
        })}
        
      </ul>
      <img src="../images/time-table.png" alt="" />
    </div>

    </div>
  )
}