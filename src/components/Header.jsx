import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div> <Navbar className="bg-transparent p-3">
    <Container>
      <Navbar.Brand href="#home">
        
     <Link to={'/'} className='text-decoration-none'>  <h4 className='text-warning text-decoration-none' ><FontAwesomeIcon icon={faVideo} beat size="xl" /> Media Player</h4></Link>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header