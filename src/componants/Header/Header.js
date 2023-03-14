import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../Header/Header.css"


function Header(){
    return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Netflix</Navbar.Brand>
      <Nav className="me-auto">
        <Link to={"/"}>Home</Link>
        <Link to={"/FavList"}>favorit list</Link>
      </Nav>
    </Container>
  </Navbar>
    )
}

export default Header;