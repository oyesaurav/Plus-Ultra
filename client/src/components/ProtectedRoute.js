import React, { useState,useEffect } from 'react'
import {Route, Redirect} from 'react-router-dom'

function ProtectedRoute({component: Component, ...rest}) {

    const [isAuth,setIsAuth] = useState(false)

    useEffect(() => {
        fetch("/login")
          .then(res => {
                   
               if(res.data === "Logged in successfully!"){
                   setIsAuth(true)
               } else {
                   setIsAuth(false)
               }
          })
      }, [])

    return (
        <Route
         {...rest}
         render= {(props) => {
            
            if(isAuth) {
                return <Component />
            } else {
                <Redirect to={{ pathname: "/", state:{from : props.location} }} />
            }
        }}
        />
    )
}

export default ProtectedRoute
