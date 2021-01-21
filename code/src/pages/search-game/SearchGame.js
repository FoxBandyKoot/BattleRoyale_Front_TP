import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
// import { DropdownList } from "react-widgets/lib";

const SearchGame = observer(({ store }) => {

    const properties = {
        public: 'Publique',
        private: 'Privée'
    };
    const maps = {
        all: 'Toutes',
        green: 'Vertes',
        blue: 'Bleues',
        red: 'Rouges',
    };

    const form = useRef(null);

    const onChange = () => {
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

                    <label className="custom-label">Rechercher par carte</label>
                    <select className="custom-dropdown" name="mapSelect">
                        {
                            Object.entries(maps).map((e, i) => <option key={i} value={e[0]}>
                                {e[1]}
                            </option>)
                        }
                    </select>

                    <label className="custom-label">Rechercher par propriété</label>
                    <select className="custom-dropdown" name="propertySelect">
                        {
                            Object.entries(properties).map((e, i) => <option key={i} value={e[0]}>
                                {e[1]}
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