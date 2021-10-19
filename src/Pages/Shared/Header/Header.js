import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import Brand from '../../../images/brand/brand.png';
import './Header.css';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar className="header" bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
                    <img style={{ width: '100px' }} src={Brand} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/#home">Home</Nav.Link>
                        {
                            user.email ? (
                                <>
                                    <Nav.Link as={HashLink} to="/blog#blog">Blog</Nav.Link>
                                    <Nav.Link as={HashLink} to="/shop#shop">Shop</Nav.Link>
                                    <Nav.Link className="logout mx-3" as={HashLink} to="/" onClick={logOut}>Logout</Nav.Link>
                                    <Navbar.Text>
                                        Signed in as: <a href="#login">{user.email}</a>
                                    </Navbar.Text>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={HashLink} to="/signin#signin">Sign in</Nav.Link>
                                    <Nav.Link className="sign-up" as={HashLink} to="/signup#signup">Sign up</Nav.Link>
                                </>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;