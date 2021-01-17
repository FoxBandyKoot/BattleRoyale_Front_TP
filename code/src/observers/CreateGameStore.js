import { observable, computed, makeObservable, action } from 'mobx';

/**
 * Make the form of create game page an observable
 */
class CurrentsGamesStore {

    formData = new FormData(undefined);
    constructor(){
        this.state = {
            resultGet: ""
        }
        makeObservable(this, {
            setFormData:action,
            loadData:action,

            formData: observable, 
            currentsGameFormData: computed,
            getResultGet: action

        })
    }
       
    get currentsGameFormData() {
        return this.formData;
    };

    getResultGet() {
        return this.state.resultGet;
    };

    setFormData = (data) => {
        this.formData = data;
    }    
    
    loadData = (data) => {
        this.state.resultGet = data;
    }   
}

export default new CurrentsGamesStore();