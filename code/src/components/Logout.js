import React from 'react';
import {useAuth} from "../context/auth";
import {expires} from "../App";
import Button from "react-bootstrap/cjs/Button";

function Logout() {
    const { setAuthTokens } = useAuth();

    function logout() {
        setAuthTokens();
    }

    if(new Date().getTime() > parseInt(expires)) {
        logout();
    }

    return <Button variant="primary" onClick={logout}>Déconnexion</Button>
}

export default Logout