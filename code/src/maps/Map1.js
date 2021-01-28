
import React from "react";

class Map1 extends React.Component {

    constructor(props) {
        super(props);
        
        this.myMap = "";
        this.grid = [];
        
        this.state = {
            inputLinkClicked: false,
        }

        this.handleAddSecondInput = this.handleAddSecondInput.bind(this)           

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
        </>)
    }
}
export default Map1;