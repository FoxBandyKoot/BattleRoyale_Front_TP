import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
// import logoImg from "../img/logo.jpg";
import { Card, Form, Input, Button, Error } from "../../components/AuthForm";
//import { useAuth } from "../../context/auth";
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
        this.state = data;
        this.isLoggedIn = false;
        this.setLoggedIn = false;
        this.isError = false;
        this.setIsError = false;
        this.email = '';
        this.password = '';
        this.postLogin = this.postLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

    postLogin() {
        if(this.state.email===data[0].email && this.state.password === data[0].password) {
            console.log("Logged")
        } else {
            console.log("Wrong authentication");
        }
    }

    /*if (isLoggedIn || authTokens) {
        return <Redirect to="/" />;
    }*/

    render() {
        return (
            <div className="main">
                {/*<Logo src={logoImg} />*/}
                <h1 className="title-page">Bienvenue !</h1>
                <form className="custom-form">
                    <input
                        className="custom-input"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder="email"
                        name="email"
                    />
                    <input
                        className="custom-input"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        placeholder="mot de passe"
                        name="password"
                    />
                    <button className="custom-button" onClick={this.postLogin}>Se connecter</button>
                </form>
                <Link to="/forgot-password">Mot de passe oublié ?</Link>
                <Link to="/signup">Je n'ai pas encore de compte ?</Link>
                { this.state.isError &&<error>Utilisateur ou mot de passe incorrect</error> }
            </div>
        );
    }
    
}

export default Login;