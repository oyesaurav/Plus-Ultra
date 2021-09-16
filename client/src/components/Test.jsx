import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'

export default function Test() {
    const [serverData, setServerData] = useState(null)
    const [toSend, setTosend] = useState("0")

    // const history = useHistory()

    useEffect(() => {
        fetch("/helloServer")
          .then(res => res.json())
          .then(serverData => setServerData(serverData.message))
      }, [])

    return (
        <div>

            <h1>{serverData}</h1>

            <form method="POST">
                <input type="text" onChange={e => setTosend(e.target.value)} />
                <button onClick={e => {
                e.preventDefault()
                fetch("/send", {
                    method: "POST",
                    headers: {
                    "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        toSend
                    })
                })
                // history.push("/helloServer")
                // console.log(toSend);
                }} type="submit">Send to server</button>
            </form>

        </div>
    )
}
