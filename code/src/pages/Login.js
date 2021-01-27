import React from "react";
// import { Link, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
//import { useAuth } from "../../context/auth";
import Menu from "../components/Menu";

// import MyGamesStore from '../observers/MyGamesStore';
import SearchGameStore from "../observers/SearchGameStore";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = [];
        this.isError = false;
        this.setIsError = false;
        this.email = '';
        this.password = '';
        this.handleInputChange = this.handleInputChange.bind(this);
        this.signin = this.signin.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    signin(e) {
        e.preventDefault()
        this.err = false;
        this.success = false;

        if (!this.state.email || !this.state.password) {
            this.err = 'Vous n\'avez pas remplis tous les champs'
            console.log(this.err);
            return;
        }
        axios.post('http://localhost:8000/api/login', {
            email: this.state.email,
            password: this.state.password,
        }).then(response => {
            if (response.status === 200) {
                this.success = true;

                localStorage.setItem('token', response.data.token);

                // Get informations on user account
                axios.get('http://localhost:8000/api/current-user', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                }).then(response => {
                    localStorage.setItem('userId', response.data);
                    this.props.history.push("/searchGame");
                })

                // Get games of user
                axios.get('http://localhost:8000/api/games',
                    {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }

                    }).then(result => {
                        if (result.status === 200) {
                            SearchGameStore.loadData(result.data)                            
                        } else {
                            console.log(result)
                        }
                    }).catch(e => {
                        console.log(e)
                    });


            }
        }).catch((err) => {
            console.log(err)
            this.err = 'Une erreur est survenue lors de la connexion';
        });
    }

    /*if (isLoggedIn || authTokens) {
        return <Redirect to="/" />;
    }*/

    render() {
        return (
            <>
                <Menu />
                <div className="div-form">
                    <h1 className="title-page">Bienvenue !</h1>
                    <form className="custom-form" onSubmit={this.signin}>

                        <label className="custom-label">Adresse email</label>
                        <input
                            className="custom-input"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="email"
                            name="email"
                        />

                        <label className="custom-label">Mot de passe</label>

                        <input
                            className="custom-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="mot de passe"
                            name="password"
                        />
                        <input type="submit" id="mySubmit" className="custom-button" onSubmit={this.signin} value="Se connecter" />
                    </form>

                    <Link to="/forgot-password">Mot de passe oublié ?</Link>
                    <Link to="/signup">Je n'ai pas encore de compte ?</Link>
                    {this.state.isError && <error>Utilisateur ou mot de passe incorrect</error>}
                </div>
            </>
        );
    }
}

export default Login;