import React from "react";
import {Button, Card, Form, Input} from "../../components/AuthForm";
import data from "./data.json"
import Popup from "reactjs-popup";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = data;
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
                <Card>
                    <h1>Compte</h1>
                    <Form>
                        <Input
                            type="text"
                            value={this.state.pseudo}
                            onChange={this.handleInputChange}
                            placeholder="Pseudo"
                            name="pseudo"
                        />
                        <Input
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="Email"
                            name="email"
                        />
                        <Input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="Mot de passe"
                            name="password"
                        />
                        <Button onClick={this.handleClick}>Sauvegarder</Button>

                        <Popup
                            trigger={<Button>Supprimer le compte</Button>}
                            modal
                            nested
                        >
                            {close => (
                                <>
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="content">
                                        <Button>Confirmer la suppression du compte</Button>
                                        <Button onClick={close}>Annuler</Button>
                                    </div>
                                </>
                            )}
                        </Popup>

                        <Button>Crédits</Button>
                    </Form>
                </Card>
        </>;
    }
}

export default Account;