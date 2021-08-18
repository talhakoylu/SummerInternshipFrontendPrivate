import { Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Categories from '../Nav/CategoryMenu'
import { Link } from 'react-router-dom'
import NavMenu from './../Nav/NavMenu';

export default function Header() {
    return (
        <div className="mb-4">
            <Navbar bg="light" expand="lg">
                <Container className="py-3">
                    <Link to="/">
                        <Navbar.Brand to="/" className={"fw-bold"}>
                            <FontAwesomeIcon icon={"book"} className={"me-2"} />
                            Bookido
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavMenu />
                        <div className="d-flex">
                            <Button>
                                <FontAwesomeIcon icon={"user"} className="me-2"></FontAwesomeIcon>
                                Hesap Yönetimi
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Categories></Categories>
        </div>
    )
}