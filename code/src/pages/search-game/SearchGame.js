import React, {useRef} from "react";
import { observer } from "mobx-react-lite";
import {DropdownList} from "react-widgets/lib";

const SearchGame = observer(({ store }) => {
    // const form = useRef(null);
    const onChange = (e) => {
        console.log(e)
        const formData = new FormData(e.target);
        store.setFormData(formData);
    }
    return <div className="searchGames">
            <div className="main">
                <div className="title-page">Rechercher une partie</div>
                <form onChange={onChange}>
                    <input
                        type="search"
                        value=""
                        placeholder="Rechercher par nom/code"
                        name="search"
                        className="custom-input"
                    />
                    <DropdownList
                        data=""
                        defaultValue={"Carte"}
                    />
                    <DropdownList
                        data=""
                        defaultValue={"Propriété"}
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