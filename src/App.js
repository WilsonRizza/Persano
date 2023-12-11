import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'; // Importe o arquivo CSS para estilizar o formulário
import Login from './Login';
import Cadastro from './Cadastrar';
import {Navbar} from './components/navbar'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/cadastro">
          <Cadastro />
        </Route>

        <Route exact path="/Home">
          <Navbar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;