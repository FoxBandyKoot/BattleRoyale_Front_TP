import React from "react";
import {Button, Card, Form, Input} from "../../components/AuthForm";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pseudo: '',
            email: '',
            password: '',
            music: false
        };
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

    handleClick() {

    }

    render() {
        return (
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
                    <Button>Supprimer le compte</Button>
                    <Button>Crédits</Button>
                </Form>
            </Card>
        );
    }
}

export default Account;