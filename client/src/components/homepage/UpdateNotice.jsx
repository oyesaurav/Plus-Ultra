import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import Axios from 'axios'

export default function UpdateNotice({match:{params:{id}}}) {
    // const [date, setDate] = useState()
    // const [body, setBody] = useState()
    const [notice, setNotice] = useState({date: "", body: ""})

    const { date, body } = notice

    const update = () => {
        Axios({
            method: "POST",
            data: {
                date: notice.date,
                body: notice.body
            },
            withCredentials: true,
            url: `https://plus-ultra-try.herokuapp.com/edit-notice/${id}`,
        }).then(res => console.log(res))
        //   .then(window.location = `/dashboard/${userData.username}`)
    }

    useEffect(() => {
        fetch("/notice")
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            // eslint-disable-next-line
            const arr = res.message.filter((element) => {
                return element._id === id
            })
            // setDate(arr[0].date)
            // setBody(arr[0].body)
            setNotice({...notice, date: arr[0].date, body: arr[0].body})
            // console.log(arr[0]);
        })
    }, [id])

    return (
        <div id="container-update-notice">
            <h1>Update Notice</h1>
            <span>
                <input type="text" name="date" value={date} onChange={e => {
                    setNotice({...notice, date: e.target.value})
                }}/>
                <br />
                <textarea name="body" rows="7" value={body} onChange={e => {
                    setNotice({...notice, body: e.target.value})
                }}/>
                <br />
                <button onClick={update}>Submit</button>
            </span>
        </div>
    )
}
