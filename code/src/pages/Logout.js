import React from 'react';
import {useAuth} from "../context/auth";
import Button from "react-bootstrap/cjs/Button";

// TODO 

function Logout() {
    const { setAuthTokens } = useAuth();

    function logout() {
        setAuthTokens();
    }

    /*if(new Date().getTime() > parseInt(expires)) {
        logout();
    }*/

    
    return <button variant="primary" className="custom-button" onClick={logout}>Déconnexion</button>
}

export default Logout