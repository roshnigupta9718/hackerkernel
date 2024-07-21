import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navigate, NavLink } from 'react-router-dom';
import { useAuth } from '../contextapi';
import { Button, Dropdown } from 'react-bootstrap';


function MyNavbar() {

let {logout,token,userEmail} = useAuth()

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">BUYCART</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
       {
        !token ?    <NavLink className='text-decoration-none mx-3 fs-4 text-success fw-bolder' to="/">LOGIN</NavLink> : ''
       }
         {
          token  ?  <NavLink className='text-decoration-none mx-3 fs-4 text-success fw-bolder' to="/home">HOME</NavLink> : ''
         }

        </Nav>
     {
      token  ? 
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       welcome user
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
        <Button variant='danger' onClick={logout}>LOGOUT</Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        : ''
     }

      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default MyNavbar