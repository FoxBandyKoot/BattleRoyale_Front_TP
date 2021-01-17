import React from "react";
import account from "../data/data.json"
import Popup from "reactjs-popup";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = account;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
                <div className="main">
                    <div className="title-page">Compte</div>
                    <form className="custom-form">

                    <label className="custom-label">Pseudo</label>
                        <input
                            type="text"
                            value={this.state.account.pseudo}
                            onChange={this.handleInputChange}
                            placeholder="Pseudo"
                            name="pseudo"
                            className="custom-input"
                        />

<label className="custom-label">Changer adresse email</label>
                        <input
                            type="email"
                            value={this.state.account.email}
                            onChange={this.handleInputChange}
                            placeholder="Email"
                            name="email"
                            className="custom-input"
                        />

<label className="custom-label">Changer le mot de passe</label>

                        <input
                            type="password"
                            value={this.state.account.password}
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