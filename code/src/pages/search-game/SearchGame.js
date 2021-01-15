import React, {useRef} from "react";
import { observer } from "mobx-react-lite";
import {DropdownList} from "react-widgets/lib";

const SearchGame = observer(({ store }) => {
    const form = useRef(null);
    const onChange = (e) => {
        const formData = new FormData(form.current);
        store.setFormData(formData);
    }
    return <div className="searchGames">
            <div className="main">
                <div className="title-page">Rechercher une partie</div>
                <form onChange={onChange} ref={form}>
                    <input
                        type="search"
                        placeholder="Rechercher par nom/code"
                        name="search"
                        className="custom-input"
                    />
                    <div className="display-search">{store.formData.get('search')}</div>
                    <DropdownList
                        data=""
                        defaultValue={"Carte"}
                        name="map"
                    />
                    <DropdownList
                        data=""
                        defaultValue={"Propriété"}
                        name="props"
                    />
                </form>
                <table>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {store.games.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.date}</td>
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
    }
);

export default SearchGame;