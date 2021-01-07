import React, { Component } from "react";
import { Card, Form, Input, Button } from "../../components/AuthForm";
import PropTypes from 'prop-types'

class CreateGame extends Component{

    constructor(props){
        super(props);
        this.state = {gameName: "HELLO"}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({gameName: event.target.value});
    }


    render(){
        return(
            <Card>
                {/*<Logo src={logoImg} />*/}
                
                <h1>Create game</h1>
                
                <Form>
                    <Input
                        type="text"
                        value={this.state.gameName}
                        placeholder="game name*"
                        onChange={this.handleChange}
                    />

                    <Button>Create saloon</Button>
                    {/* <Button onClick={createSaloon}>Create saloon</Button> */}
                </Form>
            </Card> 
        )
    }
        
}

// createSaloon = ({}) => (return true)

CreateGame.propTypes = {
    gameName: PropTypes.string.isRequired
}

export default CreateGame;