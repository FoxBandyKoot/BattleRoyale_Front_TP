import { makeAutoObservable } from "mobx"
import axios from "axios";
import Game from "../models/Game"

class SearchGameStore {
    games = [];
    formData = new FormData(undefined);

    constructor() {
        makeAutoObservable(this);
        this.getGames();
    }

    setFormData(data) {
        this.formData = data;
    }

    getGames() {
        axios.get('http://localhost:8000/api/games', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.status === 200) {
                this.games = res.data['hydra:member'];
            }
        }).catch(err => {
            console.log(err);
        })
    }
    
    loadData = (data) => {
        data['hydra:member'].forEach(element => {
            console.log(element);
            this.game = new Game();
            this.game.id = element.id;
            this.game.name = element.name;
            this.game.date = element.date;
            this.game.map = element.map;
            this.game.owner = element.owner;
            this.game.players = element.players;
            this.game.id = element.id;
            this.games.push(this.game);
            console.log(this.games)
            // game.
            // games.
        });
        
        this.state.resultGet = data;
    }   
}

export default new SearchGameStore();