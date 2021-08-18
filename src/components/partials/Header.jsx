import { Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Categories from '../CategoryMenu'

export default function Header() {
    return (
        <div className="mb-4">
            <Navbar bg="light" expand="lg">
                <Container className="py-3">
                    <Navbar.Brand href="#home" className={"fw-bold"}>
                        <FontAwesomeIcon icon={"book"} className={"me-2"} />
                        Bookido
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-auto">
                            <Nav.Link href="#home">
                                <FontAwesomeIcon icon={"home"} className="me-2"></FontAwesomeIcon>
                                Ana Sayfa
                            </Nav.Link>
                        </Nav>
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