import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
// import logoImg from "../img/logo.jpg";
import { Card, Form, Input, Button, Error } from "../../components/AuthForm";
import { useAuth } from "../../context/auth";
import data from "./data.json"

class Login extends React.Component {
    /* const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    const { authTokens } = useAuth();*/
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            setLoggedIn: false,
            isError: false,
            setIsError: false,
            email: '',
            setEmail: '',
            password: '',
            setPassword: '',
            //setAuthTokens: useAuth(),
            //authTokens: useAuth()
        };
        this.postLogin.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

/*
    function postLogin() {
        axios.post("http://localhost:8080/login", {
            "email": email,
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
    }*/


    postLogin(e) {
        e.preventDefault();
        var email = this.email;
        var password = this.password;

        console.log(email);
        console.log(password);
    }

    /*if (isLoggedIn || authTokens) {
        return <Redirect to="/" />;
    }*/

    render() {
        return (
            <Card>
                {/*<Logo src={logoImg} />*/}
                <h1>Bienvenue !</h1>
                <Form>
                    <Input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder="email" 
                    />
                    <Input
                        type="password"
                        value={this.stat.password}
                        onChange={this.handleInputChange}
                        placeholder="mot de passe"
                    />
                    <Button onClick={this.postLogin}>Se connecter</Button>
                </Form>
                <Link to="/forgot-password">Mot de passe oublié ?</Link>
                <Link to="/signup">Je n'ai pas encore de compte ?</Link>
                { this.state.isError &&<Error>Utilisateur ou mot de passe incorrect</Error> }
            </Card>
        );
    }
    
}

export default Login;