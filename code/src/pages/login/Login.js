import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
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
        this.err  = false;
        this.success = false;
        
        if(!this.state.email || !this.state.password){
          this.err = 'Vous n\'avez pas remplis tous les champs'
          console.log(this.err);
          return;  
        }
         axios.post('http://localhost:8000/api/login',{
         email : this.state.email,
         password : this.state.password,
         }).then(response => {
                if (response.status === 200) {
                        this.success = true;

                        localStorage.setItem('token', response.data.token);

                        axios.get('http://localhost:8000/api/current-user', {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('token')
                            }
                        }).then(response => {
                                localStorage.setItem('userId', response.data); 
                        })
                        this.props.history.push("/createGame");
                }
            }).catch((err)=>{
                console.log(err)
                this.err = 'Une erreur est survenue lors de la connexion';
                if(err.response.status === 401) {
                this.err = "Identifiant ou mot de passe incorrect, vous n'avez pas l'Autorisation de vous connecter";
                }
            });
       }

    /*if (isLoggedIn || authTokens) {
        return <Redirect to="/" />;
    }*/

    render() {
        return (
            <div className="main">
                <h1 className="title-page">Bienvenue !</h1>
                <form className="custom-form" onSubmit={this.signin}>
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
                    <input type="submit" id="mySubmit" className="custom-button" onSubmit={this.signin} value="Se connecter"/>
                </form>
                
                <Link to="/forgot-password">Mot de passe oublié ?</Link>
                <Link to="/signup">Je n'ai pas encore de compte ?</Link>
                { this.state.isError &&<error>Utilisateur ou mot de passe incorrect</error> }
            </div>
        );
    }
}

export default Login;