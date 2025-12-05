import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link, NavLink} from 'react-router-dom'
import "../NavBar.css"

function NavBar({categories}){
    return(
        <Navbar expand='lg' fixed='top' className='custom-navbar'>
            <Container>
                <Navbar.Brand as={Link} to='/' className='brand'>FitFem Tienda Online</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto nav-links'>
                            <NavDropdown title='Categorías' id='basic-nav-dropdown'>
                                {categories.map(cat => (
                                    <NavDropdown.Item as={NavLink} to={`/category/${cat}`} key={cat} className="dropdown-item">
                                        {cat}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget/>         
            </Container>
        </Navbar>
    )
}

export default NavBar