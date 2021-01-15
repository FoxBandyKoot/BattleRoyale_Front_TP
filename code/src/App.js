import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import forgotPassword from "./pages/forgot-password/Forgot-password";
import MofifyPassword from "./pages/modify-password/ModifyPassword";
import CreateGame from "./pages/createGame/CreateGame";
import Logout from "./components/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import Account from "./pages/Account/Account";
import ModifyPassword from "./pages/modify-password/ModifyPassword";
import 'reactjs-popup/dist/index.css';
import CurrentGames from "./pages/current-games/CurrentGames";
import SearchGame from "./pages/search-game/SearchGame";
import SearchGameStore from "./observer/SearchGameStore";


export const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")).token
  : "";
export const expires = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")).expires
  : "";
export const userId = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")).userId
  : "";

function App() {
  componentDidMount();

  const [authTokens, setAuthTokens] = useState(token);
  const setTokens = data => {
    if (data === undefined) {
      localStorage.removeItem("token");
      setAuthTokens(data);
      return;
    }
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Navbar bg="dark" variant="dark" className="mb-3">
          <Navbar.Brand href="/">Battle Royal</Navbar.Brand>
          <Nav className="mr-auto">

            {!authTokens ? <Nav.Link href="/login">Connexion</Nav.Link> : ''}
            {!authTokens ? <Nav.Link href="/signup">Inscription</Nav.Link> : ''}
            {!authTokens ? <Nav.Link href="/createGame">Créer une partie</Nav.Link> : ''}
            {!authTokens ? <Nav.Link href="/searchGame">Rechercher une partie</Nav.Link> : ''}
            {!authTokens ? <Nav.Link href="/currentGames">Parties en cours</Nav.Link> : ''}
            {!authTokens ? <Nav.Link href="/account">Mon compte</Nav.Link> : ''}

          </Nav>
          {authTokens ? <Logout></Logout> : ""}
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={forgotPassword} />
        <Route path="/createGame" component={CreateGame} />
        <Route path="/account" component={Account} />
        <Route path="/modify-password" component={ModifyPassword} />
        <Route path="/currentGames" component={CurrentGames} />
        <Route path="/searchGame" render={() => <SearchGame store={SearchGameStore} />} />

        </Router>

    </AuthContext.Provider>
  );

  // init DOM, just after render() in component life cycle
  function componentDidMount() {
    document.body.style.backgroundColor = "#053244";
  }
}
export default App;
