import * as React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
 
 
class Header extends React.Component{
    public render() { 
        return ( 
            <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link to="/home">Home</Nav.Link>
                    <Nav.Link to="/features">Features</Nav.Link>
                    <Nav.Link to="/pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            </div>
         );
    }
}
 
export default Header;