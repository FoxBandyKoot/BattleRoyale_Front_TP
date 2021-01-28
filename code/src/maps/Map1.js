import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class Map1 extends React.Component {

    constructor(props) {
        super(props);
        
        this.myMap = "";
        this.grid = [];
        
        this.state = {
            inputLinkClicked: false,
        }

        this.handleAddSecondInput = this.handleAddSecondInput.bind(this)           
        this.onFinish = this.onFinish.bind(this)

    }

    /**** PROF VERSION *****/
    test() {
        // const cells = Array.from({ length: 100 }, () => ({}));

        this.myMap = Array.from({ length: 100 }, () => ({}));
        // this.myMap = document.getElementsByClassName('.map');

        // cells.map((item, index) => {
        //     this.myMap.dangerouslySetInnerHTML += 
        //     <div className="square">
        //         <div className='cell'></div>
        //     </div>;
        // })
    }

    handleAddSecondInput() {

        this.setState({
            inputLinkClicked: true
        })  
    }

    setPosition(){}

    onFinish() {
        console.log(this.props)
        axios.patch('http://localhost:8000/api/games/' + this.props.match.params.gameId, {
            lastPlayer: '/api/players/' + this.props.match.params.playerId
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/merge-patch+json'
            }
        }).then(res => {
            if(res.status === 200) {
                axios.get('http://localhost:8000/api/current-player-game/' + this.props.match.params.gameId, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then(res => {
                    if(res.status === 200) {
                        axios.get('http://localhost:8000/push/send-notification/' + res.data, {
                            headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem('token')
                            }
                        }).then(res => {
                            if(res.status === 200) {
                                this.props.history.push('/currentGames')
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {

        this.test();
        console.log(this.myMap);

        /**** PROF VERSION *****/
        return (<>
            <div className="map" onClick={this.handleAddSecondInput}>

                {this.myMap.map((item, index) => {
                    return (
                        <p className="custom-p" onClick={this.handleAddSecondInput}>{index}</p>
                    )
                    
                })}
            </div>
            <button className="custom-button" onClick={this.onFinish}>Finish turn</button>
        </>)
    }
}
export default withRouter(Map1);