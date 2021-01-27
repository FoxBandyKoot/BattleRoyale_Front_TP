function Map(){

    function test(){
        const cells = Array.from({ length: 1200 }, () => ({}));
        cells.map(() => {
            document.querySelector('.map').innerHTML += 
            `<div class="square">
                <div class='cell'>1</div>
            </div>`;
        })
    }
    return(<>
        <h1>Document</h1>
        
    
        <div class="map"></div>
    </>)

}
export default Map;

   