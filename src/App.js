import './App.css';
import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { ProvideAuth } from "./provider/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from './components/Header'
import Pokedex from "./components/Pokedex";
import PostDetails from "./components/PostDetails";
import Encounters from "./components/Encounters";

function App() {
  return (
<ProvideAuth>
    <Router>
      <div className="App">
        <Header></Header>

      <Switch>
          <Route exact path="/">
          <ul style={{listStyle:"none"}}>
            <li><Link to="/pokedex">Pokedex</Link></li>
            <li><Link to="/protected">Hidden Place</Link></li>
          </ul>
          </Route>
          <Route path="/pokedex" exact><Pokedex/></Route>
          <Route path="/pokedex/:id" exact component={PostDetails}></Route>
          <Route path="/pokedex/:id/encounters" component={Encounters}></Route>
          <Route path="/login"><LoginPage/></Route>
          <ProtectedRoute path="/protected">Podemon Details</ProtectedRoute>
      </Switch>
      
      </div>
    </Router>  
  </ProvideAuth>
  );
}

export default App;