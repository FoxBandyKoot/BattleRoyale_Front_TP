import React from "react";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import Menu from "../components/Menu";

class CurrentGames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [
                {
                    name: 'Partie 1',
                    status: 'Mon tour',
                    number: '6',
                },
                {
                    name: 'Partie 2',
                    status: 'Mon tour',
                    number: '5',
                },
                {
                    name: 'Partie 3',
                    status: 'En attente',
                    number: '10',
                }
            ]
        }
    }

    componentDidMount() {
    }

    leaveGame(index, close) {
        const newList = this.state.games;
        newList.splice(index, 1);
        this.setState({ games: newList });
        close();
    }

    render() {
        return (
            <>
                <Menu />
                <div className="createGames">
                    <div className="main">
                        <div className="title-page">Vos parties en cours</div>
                        <table>
                            <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Statut</th>
                                <th>Nombre de tours</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.games.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.status}</td>
                                        <td>{item.number}</td>
                                        <td className="exit-btn">
                                            <Popup
                                                trigger={<FontAwesomeIcon icon={faSignOutAlt} />}
                                                modal
                                                nested
                                            >
                                                {close => (
                                                    <>
                                                        <button className="close" onClick={close}>
                                                            &times;
                                                        </button>
                                                        <div className="content">
                                                            <button className="custom-button" onClick={this.leaveGame.bind(this, index, close)}>Êtes-vous sûr de vouloir quitter la partie ?</button>
                                                            <button className="custom-button" onClick={close}>Annuler</button>
                                                        </div>
                                                    </>
                                                )}
                                            </Popup>
                                        </td>
                                    </tr>
                                )})}
                            </tbody>
                        </table>
                        <button className="custom-button">Rafraichir</button>
                    </div>
                </div>
            </>
        )
    }
}

export default CurrentGames;