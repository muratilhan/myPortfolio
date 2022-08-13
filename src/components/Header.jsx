import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../css/header.css'
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className='py-4 headerNavbar' expand="lg">
      <Container className='headerContainer' > 
        <Navbar.Brand className="text-black"><span className='header-span'>Murat İlhan</span></Navbar.Brand>
        <Navbar.Toggle className='toggleButton' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-center flex' id="basic-navbar-nav">
          <Nav className="">
            <a className='header-a' href="#about"><span className='text-black mx-4 header-items'>About</span></a>
            <a className='header-a' href="#technologies"><span className='text-black mx-4 header-items' >Technologies</span></a>
            <a className='header-a' href="#projects"><span className='text-black mx-4 header-items' >Projects</span></a>
            <a className='header-a' href="#contact"><span className='text-black mx-4 header-items' >Contact</span></a>
            <a className='header-a' href="#memories"><span className='text-black mx-4 header-items' >Memories</span></a>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;