import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Header/Header.css'


function Header() {
  return (
    <div className='navb'>
      <Navbar bg="dark" variant="dark">
        <Container className='nav'>
          <section className='showcase'>
     
      
      <Navbar.Brand className='title' href="#home">Netflix</Navbar.Brand>
      </section>
          {/* <Navbar.Brand href="#home">Netflix</Navbar.Brand> */}

          <Nav className="me-auto">
            <Link to={"/"} className="navbar">Home</Link>
            <Link to={"/FavList"} className="navbar">favorit list</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
// 2
// dounloead react router dom
// import Link and navbar and container 
// export the header to app.js