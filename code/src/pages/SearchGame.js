import React, { Component } from "react";
import Menu from "../components/Menu";
import axios from "axios";
import { withRouter } from "react-router-dom";

class SearchGame extends Component {

    constructor(props) {
        super(props);

        this.form = React.createRef();

        this.state = {
            nameCreatedGame: [],
            mapCreatedGame: [],
            maps: ['Toutes', 'Verte', 'Blue', 'Rouge']
        }
    }

    joinGame = (id) => {
        axios.post('http://localhost:8000/api/players', {
            round: 1,
            life: 3,
            game: '/api/games/' + id,
            user: '/api/users/' + localStorage.getItem('userId')
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.status === 201) {
                this.props.history.push('/saloon/game/' + id + '/player/' + res.data.id);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    componentDidMount = () => {
        axios.get('http://localhost:8000/api/games', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.status === 200) {
                res.data['hydra:member'].map((item) => {
                    axios.get('http://localhost:8000/api/players/?game=/api/games/' + item.id +'&user=/api/users/' + localStorage.getItem('userId'), {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then((res) => {
                        if(res.data['hydra:totalItems'] === 0) {
                            const games = this.state.mapCreatedGame;
                            games.push(item)
                            this.setState({
                                mapCreatedGame: games
                            });
                        }
                    })
                    return '';
                });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render = () => {
        return (
            <>
                <Menu />
                <div className="searchGames">
                    <div className="main">
                        <div className="title-page">Rechercher une partie</div>
    
                        {/********************** REASEARCH FORM **********************/}

                        <form ref={this.form}>
                            <label className="custom-label">Rerchercher par nom</label>
                            <input
                                type="search"
                                placeholder="Rechercher par nom"
                                name="search"
                                className="custom-input"
                            />
    
                            <label className="custom-label">Rechercher par carte</label>
                            <select className="custom-dropdown" name="mapSelect">
                                {
                                    this.state.maps.map((e, i) => <option key={i} value={e}>
                                        {e}
                                    </option>)
                                }
                            </select>
                        </form>
    
                        {/********************** RESULT TAB **********************/}
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Carte</th>
                                    <th>Action</th>
                                    <th></th>
    
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.mapCreatedGame.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.map}</td>
                                            <td>
                                                <button className="custom-button" onClick={() => this.joinGame(item.id)}>Rejoindre</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
    
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(SearchGame);