import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


let AuthContext = createContext() 



export let AuthProvider = ({children}) =>{

let [userEmail,setUserEmail] = useState(null)
let [token,setToken] = useState(null)
console.log(token)

let navi = useNavigate()

let logout =()=>{
    setToken(null)
    let localKey = localStorage.key(0)
    localStorage.removeItem(`${localKey}`)
    navi('/')
}

    return <AuthContext.Provider value={{token, setToken, logout, setUserEmail,userEmail}} >
        {children}
    </AuthContext.Provider>
}


//useContext

export const useAuth = () => useContext(AuthContext)