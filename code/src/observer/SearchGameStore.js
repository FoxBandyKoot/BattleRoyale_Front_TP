import React from "react"
import { makeAutoObservable } from "mobx"

class SearchGameStore {
    games = [
        {
            name: 'Partie 1',
            date: "15/01/21"
        },
        {
            name: 'Partie 2',
            date: "16/01/21"
        },
        {
            name: 'Partie 3',
            date: "17/01/21"
        },
    ];
    search = '';

    constructor() {
        makeAutoObservable(this)
    }

    setSearch(search) {
        this.search = search;
    }
}

export default new SearchGameStore();