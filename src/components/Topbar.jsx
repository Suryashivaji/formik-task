import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function Topbar() {

  const navigate = useNavigate()

  return <>

  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">BOOk LIBRARY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link onClick={()=>navigate('/')} >BOOK RECORDS</Nav.Link>
            <Nav.Link  onClick={()=>navigate('/create')}>ADD BOOKS</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  
  </>
   
}

export default Topbar
