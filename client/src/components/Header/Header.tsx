import * as React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './Header.css';
 
 
class Header extends React.Component{
    public render() { 
        return ( 
            <div>
            <Navbar collapseOnSelect={false} expand="lg" bg="dark" variant="dark">
                <LinkContainer to='/home'>
                    <Navbar.Brand>stay<span className="red-highlight">ALERT</span></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/home">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/news">
                        <Nav.Link>News</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/favourite">
                        <Nav.Link>Favourite</Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
         );
    }
}
 
export default Header;