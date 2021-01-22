import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import forgotPassword from "./pages/Forgot-password";
// import MofifyPassword from "./pages/modify-password/ModifyPassword";
import CreateGame from "./pages/CreateGame";
import Logout from "./pages/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import Account from "./pages/Account";
import ModifyPassword from "./pages/ModifyPassword";
import 'reactjs-popup/dist/index.css';
import CurrentGames from "./pages/CurrentGames";
import SearchGame from "./pages/SearchGame";
import SearchGameStore from "./observers/SearchGameStore";
import PrivateRoute from "./context/PrivateRoute";

/*export const userId = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")).userId
  : "";*/

function App() {

  componentDidMount();

  const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";

  const [authTokens, setAuthTokens] = useState(token);
  const setTokens = data => {
    if (data === undefined) {
      localStorage.removeItem("token");
      setAuthTokens(data);
      return;
    }
    localStorage.setItem("token", data);
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
            {authTokens ? <Nav.Link href="/createGame">Créer une partie</Nav.Link> : ''}
            {authTokens ? <Nav.Link href="/searchGame">Rechercher une partie</Nav.Link> : ''}
            {authTokens ? <Nav.Link href="/currentGames">Parties en cours</Nav.Link> : ''}
            {authTokens ? <Nav.Link href="/account">Mon compte</Nav.Link> : ''}

          </Nav>
          {/*{authTokens ? <Logout></Logout> : ""}*/}
        </Navbar>
        <Route path="/login" render={ (props) => <Login {...props}/> } />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/forgot-password" component={forgotPassword} />
        <PrivateRoute path="/createGame" component={CreateGame} />
        <PrivateRoute path="/account" component={Account} />
        <Route path="/modify-password" component={ModifyPassword} />
        <PrivateRoute path="/currentGames" component={CurrentGames} />
        <PrivateRoute path="/searchGame" render={() => <SearchGame store={SearchGameStore} />} />

        </Router>

     </AuthContext.Provider>
  )

  // init DOM, just after render() in component life cycle
  function componentDidMount() {
    document.body.style.backgroundColor = "#053244";
  }
}
export default App;
