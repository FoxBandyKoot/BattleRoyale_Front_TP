import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
// import logoImg from "../img/logo.jpg";
import { Card, Form, Input, Button, Error } from "../../components/AuthForm";
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
        <Card>
            {/*<Logo src={logoImg} />*/}
            <h1>Bienvenue !</h1>
            <Form>
                <Input
                    type="username"
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder="email"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder="mot de passe"
                />
                <Button onClick={postLogin}>Se connecter</Button>
            </Form>
            <Link to="/forgot-password">Mot de passe oublié ?</Link>
            <Link to="/signup">Je n'ai pas encore de compte ?</Link>
            { isError &&<Error>Utilisateur ou mot de passe incorrect</Error> }
        </Card>
    );
}

export default Login;