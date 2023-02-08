import React from 'react'
import "./pages/page.css"
import {  Container, Nav, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div style={{marginBottom:"1rem"}}>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><span className='s1'>UI/UX</span></Navbar.Brand>
          <Nav className="mb-2">
            <Nav.Link href="#home">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header