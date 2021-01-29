import React, { Component } from "react";
import Menu from "../components/Menu";
import axios from "axios";
import CreateGameStore from "../observers/CreateGameStore";

export default class CreateGame extends Component {

  constructor(props) {
    super(props)

    this.form = React.createRef();

    let playerNumbers = [1, 2, 3, 4]
    // let properties = ['Publique', 'Privée']
    let maps = ['Verte', 'Blue', 'Rouge']

    this.state = {
      gameName: " ",
      playerNumber: playerNumbers,
      // property: properties,
      map: maps,
    }
  }

  onChange = (e) => {
    const formData = new FormData((this.form.current))
    CreateGameStore.setFormData(formData)

    this.currentGameName = CreateGameStore.createGameFormData.get('gameNameInput')
    this.currentPlayerNumber = CreateGameStore.createGameFormData.get('playerNumberSelect')
    // this.currentProperty = CreateGameStore.createGameFormData.get('propertySelect')
    this.currentMap = CreateGameStore.createGameFormData.get('mapSelect')

    // Enable or disable button of form validation
    this.formIsValid =
      this.currentGameName !== "" &&
      this.currentPlayerNumber !== 0 &&
      // this.currentProperty !== "" &&
      this.currentMap !== ""

    this.render()
  }

  onSubmit = (form) => {
    form.preventDefault()
    this.createGame()
  }

  createGame = () => {
    axios.post('http://localhost:8000/api/games', {
      owner: "/api/users/" + localStorage.getItem('userId'),  
      name: this.currentGameName,
      code: "N/A",
      round: 0,
      map: this.currentMap,
      date: "2021-01-29"
    }, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      }).then(result => {
        if (result.status === 200 || result.status === 201) {
          this.props.history.push('/saloon')
        } else {
          console.log(result)
          alert(result)
        }
      }).catch(e => {
        console.log(e)
        alert(e)
      });
  }


  render = () => {

    // Enable or disable button of form validation
    this.buttonSubmit = document.getElementById("mySubmit")
    if (this.buttonSubmit && this.formIsValid) {
      this.buttonSubmit.disabled = false
    } else if (this.buttonSubmit && !this.formIsValid) {
      this.buttonSubmit.disabled = true
    }

    return <>
      <Menu />

      {/********************** DISPLAY PAGE **********************/}
      <div className="div-form">

        {/********************** TITLE **********************/}
        <h1 className="title-page">Créer une partie</h1>

        <form className="custom-form" ref={this.form} onChange={this.onChange} onSubmit={this.onSubmit}>
          {/********************** GAME NAME **********************/}
          <label className="custom-label">Nom de la partie</label>
          <input
            className="custom-input"
            type="text"
            name="gameNameInput"
          />

          {/********************** PLAYER NUMBER SELECTOR **********************/}
          {/* <label className="custom-label">Nombre de joueurs sur la carte</label>
          <select className="custom-dropdown" name="playerNumberSelect">
            {
              this.state.playerNumber.map((e, i) => <option key={i} value={e}>
                {e}
              </option>)
            }
          </select> */}


          {/********************** PROPERTY SELECTOR **********************/}
          {/* <label className="custom-label">Qui peut rejoindre la partie ?</label>
          <select className="custom-dropdown" name="propertySelect">
            {
              this.state.property.map((e, i) => <option key={i} value={e}>
                {e}
              </option>)
            }
          </select> */}

          {/********************** MAP SELECTOR **********************/}
          <label className="custom-label">Sélectionner la carte</label>
          <select className="custom-dropdown" name="mapSelect">
            {
              this.state.map.map((e, i) => <option key={i} value={e}>
                {e}
              </option>)
            }
          </select>

          {/********************** CREATE GAME BUTTON **********************/}
          <input type="submit" id="mySubmit" className="custom-button" disabled={true} value="Créer le salon" />

        </form>

      </div>
    </>
  }
}