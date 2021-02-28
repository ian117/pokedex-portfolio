import './App.css';
import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { ProvideAuth } from "./provider/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from './components/Header'


function App() {
  return (
<ProvideAuth>
    <Router>
      <div className="App">
        <Header></Header>



      <Switch>
          <Route exact path="/">
          <ul style={{listStyle:"none"}}>
            <li><Link to="/public">Tyari Plaza</Link></li>
            <li><Link to="/protected">Hidden Place</Link></li>
          </ul>
          </Route>
          <Route path="/public">Estamos in Halo Invasion</Route>
          <Route path="/login"><LoginPage/></Route>
          <ProtectedRoute path="/protected">Estamos seguros y planeando la invasión</ProtectedRoute>
      </Switch>
      
      </div>
    </Router>  
  </ProvideAuth>
  );
}

export default App;
