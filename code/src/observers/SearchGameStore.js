import { makeAutoObservable } from "mobx"
import axios from "axios";

class SearchGameStore {
    games = [];
    formData = new FormData(undefined);
    resultGet= "";

    constructor() {
        makeAutoObservable(this)
        //this.getGames(); 
    }

    setFormData(data) {
        this.formData = data;
    }

}

export default new SearchGameStore();