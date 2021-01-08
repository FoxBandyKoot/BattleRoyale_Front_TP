import React, { Component } from "react";
import { Card, Form, Input, Button } from "../../components/AuthForm";
//import { DropdownList } from 'react-widgets'
import './CreateGame.css';
import PropTypes from 'prop-types'


class CreateGame extends Component{

    constructor(props){
        super(props);

        // let { DropdownList }
        //let colors = ['orange', 'red', 'blue', 'purple']   

        this.state = {
            gameName: "", 
            //colors: colors,
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
            <Card className="backgroundApp">
                
                {/********************** TITLE  **********************/}
                <h1 className="title">Create a game</h1>
                
                <Form>
                  {/********************** GAME NAME  **********************/}
                  <Input
                      className="input"
                      type="text"
                      value={this.state.gameName}
                      placeholder="game name*"
                      onChange={this.handleChange}
                  />
                  <br></br>

                  {/********************** PLAYER NUMBER SELECTOR  **********************/}
                    {/* <>
                      <DropdownList
                    data={this.state.colors}
                    defaultValue={"blue"}
                    disabled={["red", "purple"]}/>
                    </> */}

                  <select className="sc-dlfnbm boijVN input" id="playerNumberSelector">
                    <option className="playerNumberOption" value="2">2</option>
                    <option className="playerNumberOption" value="3">3</option>
                    <option className="playerNumberOption" value="4">4</option>
                    <option className="playerNumberOption" value="5">5</option>
                  </select>
                  <br></br>

                  {/********************** PROPERTY SELECTOR  **********************/}
                  <select className="sc-dlfnbm boijVN input" id="propertySelector">
                    <option className="propertyOption" value="Private">Private</option>
                    <option className="propertyOption" value="Public">Public</option>
                  </select>
                  <br></br>

                  {/********************** LEVEL SELECTOR  **********************/}
                  <select className="sc-dlfnbm boijVN input" id="levelSelector">
                    <option className="levelOption" value="Level 1">Level 1</option>
                    <option className="levelOption" value="Level 2">Level 2</option>
                    <option className="levelOption" value="Level 3">Level 3</option>
                  </select>

                  <br></br>

                  {/********************** CREATE GAME BUTTON  **********************/}
                  <Button className="buttonA">Create saloon</Button>

                </Form>
            </Card> 

        )      
    }
}

// createSaloon = ({}) => (return true)

// CreateGame.propTypes = {
//     state.gameName: PropTypes.string.isRequired
// }

export default CreateGame;