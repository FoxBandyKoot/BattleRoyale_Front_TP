import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
// import { DropdownList } from "react-widgets/lib";

const SearchGame = observer(({ store }) => {

    let properties = ['Publique', 'Privée']
    let maps = ['Toutes', 'Verte', 'Blue', 'Rouge']

    // this.state = {
    //   gameName: " ",
    //   playerNumber: playerNumbers,
    //   property: properties,
    //   map: maps
    // }

    const form = useRef(null);

    const onChange = (e) => {
        const formData = new FormData(form.current);
        store.setFormData(formData);
    }

    return (
        <div className="searchGames">
            <div className="main">
                <div className="title-page">Rechercher une partie</div>

                {/********************** REASEARCH FORM **********************/}
                <form onChange={onChange} ref={form}>

                    <label className="custom-label">Rerchercher par nom</label>
                    <input
                        type="search"
                        placeholder="Rechercher par nom/code"
                        name="search"
                        className="custom-input"
                    />
                    <div className="display-search">{store.formData.get('search')}</div>

                    <label className="custom-label">Rechercher par carte</label>
                    <select className="custom-dropdown" name="mapSelect">
                        {
                            maps.map((e, i) => <option key={i} value={e}>
                                {e}
                            </option>)
                        }
                    </select>

                    <label className="custom-label">Rechercher par propriété</label>
                    <select className="custom-dropdown" name="propertySelect">
                        {
                            properties.map((e, i) => <option key={i} value={e}>
                                {e}
                            </option>)
                        }
                    </select>
                </form>

                {/********************** RESULT TAB **********************/}
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Date</th>
                            <th>Carte</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.games.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.map}</td>
                                    <td>
                                        <button className="custom-button">Rejoindre</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    )
}
);

export default SearchGame;