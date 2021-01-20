import React, { Component } from "react";


class CreateSaloon extends Component{

    constructor(props){
        super(props)

        let playerNumbers = 2   
        let properties = ['Public', 'Private']   
        let maps = ['Green', 'Blue', 'Red']   

        this.state = {
            gameName: "", 
            playerNumber: playerNumbers,
            property: properties,
            map: maps,
            listOpen: false,
            headerTitle: this.props.title}

        // this.handleChange = this.handleChange.bind(this)
        this.handleGameNameChange = this.handleGameNameChange.bind(this)
        this.handlePlayerNumberChange = this.handlePlayerNumberChange.bind(this)
        this.handlePropertyChange = this.handlePropertyChange.bind(this)
        this.handleMapChange = this.handleMapChange.bind(this)

    }

    // init form
    // handleChange(event) {
    //   console.log(event)
    //     this.setState({[name]: value});
    // }

    handleGameNameChange(event){
      this.state.gameName = event.target.value}
    handlePlayerNumberChange(event){this.state.playerNumber = event}
    handlePropertyChange(event){this.state.property = event}
    handleMapChange(event){this.state.map = event}

    // handleGameNameChange(event){this.setState({gameName: event.target.value})}
    // handlePlayerNumberChange(event){this.setState(prevState=>({playerNumber: [...prevState.playerNumber, event]}))}
    // handlePropertyChange(event){this.setState({property: [event]})}
    // handleMapChange(event){this.setState({map: [event]})}

    handleClickOutside(){
        this.setState({
          listOpen: false // Utilité  ?
        })
      }

    toggleList(){
      this.setState(prevState => ({
        listOpen: !prevState.listOpen
      }))
    }


    render(){
        // const{list} = this.props
        // const{listOpen, headerTitle} = this.state

        // Enable or disable button of form validation   
      

        // console.log("property", property);
        // console.log("this.state.property", this.state.property);
        // console.log("propertyCheck", propertyCheck);
        /********************** DISPLAY PAGE  **********************/
        return(
            <div className="div-form">
                
                <div>
                  <p className="custom-p">{this.state.gameName}</p>
                  <p className="custom-p">{this.state.map}</p>
                  <p className="custom-p">{this.state.property}</p>
                </div>
                
                
                <form className="custom-form">
                  {/********************** GAME NAME  **********************/}
               

                  {/********************** PLAYERS DISPLAY  **********************/}
             
    
 
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

export default CreateSaloon;