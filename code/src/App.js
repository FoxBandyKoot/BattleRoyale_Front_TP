import './App.scss';
import React, {useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import forgotPassword from "./pages/forgot-password/Forgot-password";
import CreateGame from "./pages/createGame/CreateGame";
import Logout from "./components/Logout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import Account from "./pages/Account/Account";
import 'reactjs-popup/dist/index.css';
import CurrentGames from "./pages/CurrentGames";
import { slide as Menu } from 'react-burger-menu';
import Hamburger from 'hamburger-react'

export const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")).token : '';
export const expires = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")).expires : '';
export const userId = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")).userId : '';

function App() {

  componentDidMount()

  const [authTokens, setAuthTokens] = useState(token);
  const [isOpen, setOpen] = useState(false)
  const setTokens = (data) => {
    if(data === undefined) {
      localStorage.removeItem('token');
      setAuthTokens(data);
      return;
    }
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      
      <div id="outer-container">
        <Hamburger toggled={isOpen} toggle={setOpen}/>
        <Menu pageWrapId= { "page-wrap" } outerContainerId = { "main" }>
          <main id = "page-wrap">
              {!authTokens ? <button className="custom-button"><Nav.Link href="/login" className="custom-href-text">Connexion</Nav.Link></button> : ''}
              {!authTokens ? <button className="custom-button"><Nav.Link href="/signup" className="custom-href-text">Inscription</Nav.Link></button> : ''}
              {!authTokens ? <button className="custom-button"><Nav.Link href="/createGame" className="custom-href-text">Create game</Nav.Link></button> : ''}
              {!authTokens ? <button className="custom-button"><Nav.Link href="/currentGames" className="custom-href-text">Parties en cours</Nav.Link></button> : ''}
              {!authTokens ? <button className="custom-button"><Nav.Link href="/account" className="custom-href-text">Mon compte</Nav.Link></button> : ''}
              {authTokens ? <Logout></Logout> : ''}
          </main>
        </Menu>
      </div>

      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={forgotPassword} />
        <Route path="/createGame" component={CreateGame} />
        <Route path="/account" component={Account} />
        <Route path="/currentGames" component={CurrentGames} />

      </Router>
    </AuthContext.Provider>
  );

  // init DOM, just after render() in component life cycle
  function componentDidMount() {
    document.body.style.backgroundColor = "#053244"
  }

}
export default App;