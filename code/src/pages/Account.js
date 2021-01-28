import React from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import Menu from "../components/Menu";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pseudo: '',
            email: '',
            password: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/users/' + localStorage.getItem('userId'), {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            this.setState({
                email: res.data.email,
                pseudo: res.data.pseudo ? res.data.pseudo : ''
            });
        }).catch(err => {
            console.log(err);
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleClick() {

    }

    render() {
        return <>
                <Menu />
                <div className="main">
                    <div className="title-page">Compte</div>
                    <form className="custom-form">

                    <label className="custom-label">Pseudo</label>
                        <input
                            type="text"
                            value={this.state.pseudo}
                            onChange={this.handleInputChange}
                            placeholder="Pseudo"
                            name="pseudo"
                            className="custom-input"
                        />

                        <label className="custom-label">Changer adresse email</label>
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="Email"
                            name="email"
                            className="custom-input"
                        />

                        <label className="custom-label">Changer le mot de passe</label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="Mot de passe"
                            name="password"
                            className="custom-input"
                        />
                    </form>
                    <button className="custom-button" onClick={this.handleClick}>Sauvegarder</button>

                    <Popup
                        trigger={<button className="custom-button">Supprimer le compte</button>}
                        modal
                        nested
                    >
                        {close => (
                            <>
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="content">
                                    <button className="custom-button">Confirmer la suppression du compte</button>
                                    <button className="custom-button" onClick={close}>Annuler</button>
                                </div>
                            </>
                        )}
                    </Popup>

                    <button className="custom-button">Crédits</button>
                </div>
        </>;
    }
}

export default Account;