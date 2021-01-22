import React from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import {Redirect} from "react-router-dom";

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
        localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTEzMDYyMjUsImV4cCI6MTYxMTMwOTgyNSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWxleGlzLmJyb2hhbkB5bm92LmNvbSJ9.ctdIL1igKbqqq3awp8ZSwGeMBvk7rlQHVbMxMFXaNytI7GkfqEevhhfEekCI0FwXvTRo9-ljRIyLW3diex8rNb0EgGSAru0juuYv4-buI34AuhiHWhpwmzYqiglRKTB-SxdwPp4vknwCjs9bsmMHF60zSlMhL3zhCrw64mMPvi8zPkJut5ZnmwbA-g5QVJXFshEnlUqabdhE9kDWDbMEb4uBnAinNYKO5teHIBqtqX41LeDBoNX-Mf228nDDtmCVo-OzwMTnkqTXxUt8FGeaL_kQBOIS9qDSU6nXmsyyH4nKLwisonKSu5KIhcwYg3_8vvZ2p0UTQn6TwYXemunlA5DlYjV2ySyGUMAduSJMvKgLi0zCamrnRifRTXX_CfNfceYPlmLaR982dI_iBoIUeRrn4ry1TVJbtZFMhadPL0sKXVhTRUvcXBfk_29JkVZ6RRpIwpTz-_Q1MpJyfzJPp9TTiobn_WPOJKeaa1Z1fwN1oKYBz2713-l7KXDCxWh4E9U_8xyfRCCuN-qS-227LKMwuW3hjvVliXy6fVEbjyPiS5w_eaLMSkgKuFDoarZdcIDrAXyeFKHaXVIN107vnGQpyuM44qrQs3p6Opmp-rkT-JJbgZFLuLZJMestwPO4EtwN7lFgW3wVwqmRmIyhFpDcTyM5H4ZpjWwcdvFxy28');
        localStorage.setItem('userId', '1');
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