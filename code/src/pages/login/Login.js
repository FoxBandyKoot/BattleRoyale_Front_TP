import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
// import logoImg from "../img/logo.jpg";
// import { Card, Form, Error } from "../../components/AuthForm";
import { useAuth } from "../../context/auth";

function Login() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    const { authTokens } = useAuth();

    function postLogin() {
        axios.post("http://localhost:8080/login", {
            "username": userName,
            "password": password
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if (isLoggedIn || authTokens) {
        return <Redirect to="/" />;
    }

    return (
        <div className="main">
            {/*<Logo src={logoImg} />*/}
            <h1 className="title-page">Connexion</h1>
            <form className="custom-form">
                <input
                    className="custom-input"
                    type="username"
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder="username"
                />
                <input
                    className="custom-input"
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder="password"
                />
                <button className="custom-button" onClick={postLogin}>Sign In</button>
            </form>
            <Link to="/signup">Créer un compte</Link>
            { isError &&<error>Utilisateur ou mot de passe incorrect</error> }
        </div>
    );
}

export default Login;