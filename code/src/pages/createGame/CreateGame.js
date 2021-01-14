import React, { Component } from "react";
import { DropdownList } from 'react-widgets'
import PropTypes from 'prop-types'


class CreateGame extends Component{

    constructor(props){
        super(props);

        let playerNumber = ['1', '2', '3', '4']   
        let property = ['Public', 'Private']   
        let maps = ['Green', 'Blue', 'Red']   

        this.state = {
            gameName: "", 
            playerNumber: playerNumber,
            property: property,
            maps: maps,
            listOpen: false,
            headerTitle: this.props.title}

        this.handleChange = this.handleChange.bind(this);

    }

    // init form
    handleChange(event) {
        this.setState({gameName: event.target.value});
    }

    handleClickOutside(){
        this.setState({
          listOpen: false
        })
      }
      toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
      }


    render(){
        const{list} = this.props
        const{listOpen, headerTitle} = this.state
        return(
            <div className="main">
                
                {/********************** TITLE  **********************/}
                <h1 className="title-page">Create a game</h1>
                
                <form className="custom-form">
                  {/********************** GAME NAME  **********************/}
                  <input
                      className="custom-input"
                      type="text"
                      value={this.state.gameName}
                      placeholder="Game name*"
                      onChange={this.handleChange}
                  />

                  {/********************** PLAYER NUMBER SELECTOR  **********************/}
                    <>
                    <DropdownList
                    data={this.state.playerNumber}
                    defaultValue={"Player number*"}/>
                    </>

                  {/********************** PROPERTY SELECTOR  **********************/}
                  <>
                  <DropdownList
                    data={this.state.property}
                    defaultValue={"Who can join ?*"}/>
                  </>

                  {/********************** MAP SELECTOR  **********************/}
                    <>
                    <DropdownList
                    data={this.state.maps}
                    defaultValue={"Select the map*"}/>
                    </>

                  {/********************** CREATE GAME BUTTON  **********************/}
                  <button className="custom-button">Create saloon</button>

                </form>
            </div> 

        )      
    }
}

// createSaloon = ({}) => (return true)

// CreateGame.propTypes = {
//     state.gameName: PropTypes.string.isRequired
// }

export default CreateGame;