import React from "react";
import { observer } from "mobx-react-lite";

const SearchGame = observer(({ store }) =>
    <div className="searchGames">
        <div className="main">
            <div className="title-page">Rechercher une partie</div>
            <form>
                <input
                    type="search"
                    value={store.search}
                    placeholder="Rechercher par nom/code"
                    name="search"
                    className="custom-input"
                    onChange={(e) => {store.setSearch(e.target.value)}}
                />
            </form>
            {store.search}
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
);

export default SearchGame;