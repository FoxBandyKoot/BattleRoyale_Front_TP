import React, {useState} from "react";
import {Link, Redirect} from 'react-router-dom';
import axios from "axios";
import Menu from "../components/Menu";

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = []
        this.email = '';
        this.pseudo = '';
        this.password = '';
        this.handleInputChange = this.handleInputChange.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    signup(e) {
        e.preventDefault()
        this.err = false;
        this.success = false;

        console.log("hi signup")

        if(!this.state.email || !this.state.password){
            this.err = 'Vous n\'avez pas remplis tous les champs'
            console.log(this.err);
            return;  
        }
        axios.post("http://localhost:8000/api/sign-up", {
            email: this.state.email,
            pseudo: this.state.pseudo,
            password: this.state.password
        }).then(response => {
            if (response.status === 200) {
                this.props.history.push("/login");
                console.log("created");
            } 
        }).catch((err) => {
            console.log("error here");
            this.err = 'Une erreur est survenue lors de l\'inscription';
            console.log(err) 
        });
    }

    render() {
        return (
            <>
                <Menu />
                <div className="div-form">
                    <h1 className="title-page">Inscription</h1>
                    <form className="custom-form" onSubmit={this.signup}>
                        <label className="custom-label">Adresse email</label>
                        <input
                            className="custom-input"
                            type="email"
                            value={this.state.email}
                            onChange={ this.handleInputChange }
                            placeholder="email"
                            name="email"
                        />

                        <label className="custom-label">Pseudo</label>
                        <input
                            className="custom-input"
                            type="pseudo"
                            value={this.state.pseudo}
                            onChange={ this.handleInputChange }
                            placeholder="pseudo"
                            name="pseudo"
                        />
        
                        <label className="custom-label">Mot de passe </label>
                        <input
                            className="custom-input"
                            type="password"
                            value={this.state.password}
                            onChange={ this.handleInputChange }
                            placeholder="Mot de passe"
                            name="password"
                        />
                        <input type="submit" id="mySubmit" className="custom-button" onSubmit={this.signup} value="S'inscrire"/>
                    </form>
                    <Link to="/login">Déjà un compte ?</Link>
                </div>
            </>
        );
    }
    
}

export default Signup;