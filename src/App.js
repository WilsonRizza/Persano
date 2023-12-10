import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'; // Importe o arquivo CSS para estilizar o formulário
import Login from './Login';
import Cadastro from './Cadastrar';
function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/cadastro">
          <Cadastro />
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}


export default App;

