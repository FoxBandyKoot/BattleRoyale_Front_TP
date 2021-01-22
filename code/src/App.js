import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import forgotPassword from "./pages/Forgot-password";
// import MofifyPassword from "./pages/modify-password/ModifyPassword";
import CreateGame from "./pages/CreateGame";
import "bootstrap/dist/css/bootstrap.min.css";
import Account from "./pages/Account";
import ModifyPassword from "./pages/ModifyPassword";
import 'reactjs-popup/dist/index.css';
import CurrentGames from "./pages/CurrentGames";
import SearchGame from "./pages/SearchGame";
import SearchGameStore from "./observers/SearchGameStore";
import PrivateRoute from "./context/PrivateRoute";

function App() {

    initialize();

  return (
    <Router>
        <Route path="/login" render={ (props) => <Login {...props}/> } />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/forgot-password" component={forgotPassword} />
        <PrivateRoute path="/createGame" component={CreateGame} />
        <PrivateRoute path="/account" component={Account} />
        <Route path="/modify-password" component={ModifyPassword} />
        <PrivateRoute path="/currentGames" component={CurrentGames} />
        <PrivateRoute path="/searchGame" component={() => <SearchGame store={SearchGameStore} />} />
    </Router>
  )

    // init DOM, just after render() in component life cycle
    function initialize() {
        document.body.style.backgroundColor = "#053244";
    }
}
export default App;