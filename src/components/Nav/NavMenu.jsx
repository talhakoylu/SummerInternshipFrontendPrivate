import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Nav, Navbar } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
function NavMenu() {
    return (
            <Nav className="me-auto ms-auto">
                    <NavLink exact to={"/"} className={"nav-link"}>
                        <FontAwesomeIcon icon={"home"} className="me-2"></FontAwesomeIcon>
                        Ana Sayfa
                    </NavLink>
                    <NavLink to = {"/books"} className={"nav-link"}>
                        <FontAwesomeIcon icon={"book"} className="me-2"></FontAwesomeIcon>
                        Kitaplar
                    </NavLink>
                    <NavLink to = "/authors" className={"nav-link"}>
                        <FontAwesomeIcon icon={"user"} className="me-2"></FontAwesomeIcon>
                        Yazarlar
                    </NavLink>
            </Nav>
    )
}

export default NavMenu