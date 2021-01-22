import React from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import Logout from "./Logout";

class Menu extends React.Component {

    render() {
        const token = localStorage.getItem('token');
        return <Navbar bg="dark" variant="dark" className="mb-3">
            <Navbar.Brand href={token ? '/searchGame' : 'login'}>Battle Royal</Navbar.Brand>
            <Nav className="mr-auto">
                {!token ? <Nav.Link href="/login">Connexion</Nav.Link> : ''}
                {!token ? <Nav.Link href="/signup">Inscription</Nav.Link> : ''}
                {token ? <Nav.Link href="/createGame">Créer une partie</Nav.Link> : ''}
                {token ? <Nav.Link href="/searchGame">Rechercher une partie</Nav.Link> : ''}
                {token ? <Nav.Link href="/currentGames">Parties en cours</Nav.Link> : ''}
                {token ? <Nav.Link href="/account">Mon compte</Nav.Link> : ''}
                {token ? <Logout></Logout> : ""}
            </Nav>
        </Navbar>
    }
}

export default Menu;