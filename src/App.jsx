import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import MyNavbar from './components/MyNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectRouteHome from './components/ProtectRouteHome'

function App() {
  return (
    <div>
      <MyNavbar/>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={
      <ProtectRouteHome>
        <Home/>
      </ProtectRouteHome>
    }/>
   </Routes>
    </div>
  )
}

export default App