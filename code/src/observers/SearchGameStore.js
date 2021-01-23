import { makeAutoObservable } from "mobx"
import axios from "axios";

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
}

export default new SearchGameStore();