import React from 'react'
import { useAuth } from '../contextapi'
import { Navigate } from 'react-router-dom'

function ProtectRouteHome({children}) {

    let {token,userEmail} = useAuth()

if(token || localStorage.getItem(userEmail)===token) return children

  return <Navigate to='/'/>
}

export default ProtectRouteHome