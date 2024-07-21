import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../contextapi'

function Login() {

    let [data,setData] = useState({
        email:'eve.holt@reqres.in',password:'tailwind'
    })

let {setToken,token ,setUserEmail} = useAuth()

let navi = useNavigate()

// if(localStorage.getItem(data.email)===token){
  // return navi('/home')
// }

    let handleChange =(e)=>{
        setData(
            {...data, [e.target.name]:e.target.value}
        )
    }

 

    let handleSubmit = async(e)=>{

e.preventDefault()
// console.log(data);

let req = await fetch('https://reqres.in/api/login',{method:'POST',body:JSON.stringify(data),headers:{"Content-type":'application/json'}})

  let reqBody = await req.json()
  // console.log(reqBody)
setToken(reqBody?.token)
setUserEmail(data.email)
localStorage.setItem(data.email, reqBody?.token )
  if(reqBody.token){
    navi('/home')
  }else{
    alert(reqBody.errors)
  }

    }

let localKey = localStorage.key(0)
if(localStorage.getItem(localKey)===token){
  return <Navigate to='/home'/>
}

  return (
    <div>
        <h2 className='my-4 display-3 border-bottom pb-3'>LOGIN-PAGE</h2>
        <form onSubmit={handleSubmit} className='border border-warning w-75 m-auto rounded-4' >

<input type="email" 
className='form-control w-75 m-auto my-3'
placeholder='USER-EMAIL'
value={data.email}
name='email'

onChange={handleChange}
/>
<input type="text" 
className='form-control w-75 m-auto my-3'
placeholder='USER-PASSWORD'
value={data.pass}
name='password'
onChange={handleChange}
/>

<button type='submit' className='my-3 w-50 d-block rounded-3 fw-normal fs-3 m-auto'>SUBMIT</button>

        </form>
    </div>
  )
}

export default Login