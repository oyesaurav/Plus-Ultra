import React from 'react'
import {Route} from 'react-router-dom'
import {Auth} from './authpage/LoginPage'
import Home from './homepage/home'

function ProtectedRoute({component: Component, ...rest}) {

    // const [isAuth,setIsAuth] = useState(false)

    // useEffect(() => {
    //     fetch("/dashboard/:id")
    //       .then(res => {
                   
    //            if(res.data === "No auth" ){
    //                setIsAuth(false)
    //            } else {
    //                setIsAuth(true)
    //            }
    //       })
    //   }, [isAuth])

    return (
        <Route
         {...rest}
         render= {(props) => {
            
            if(Auth) {
                return <Component />
            } else {
                return <Home/>
            }
        }}
        />
    )
}

export default ProtectedRoute
