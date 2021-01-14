import React, {useState} from "react";
import {Link, Redirect} from 'react-router-dom';
// import logoImg from "../img/logo.jpg";
// import {Card, Form, Error} from '../../components/AuthForm';
import {useAuth} from "../../context/auth";
import axios from "axios";

function Signup() {
    const [isError, setIsError] = useState(false);
    const [isCreated, setCreated] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { authTokens } = useAuth();

    if (authTokens) {
        return <Redirect to="/" />;
    }

    function postSignUp() {
        axios.post("http://localhost:8080/sign-up", {
            "username": userName,
            "password": password
        }).then(result => {
            if (result.status === 200) {
                setCreated(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if(isCreated) {
        return <Redirect to="/login" />
    }

    return (
        <div className="main">
            {/*<Logo src={logoImg} />*/}
            <h1 className="title-page">Inscription</h1>
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
                <button className="custom-button" onClick={postSignUp}>Sign Up</button>
            </form>
            <Link to="/login">Déjà un compte ?</Link>
            { isError &&<error>Erreur lors de la création de l"'"utilisateur</error> }
        </div>
    );
}

export default Signup;