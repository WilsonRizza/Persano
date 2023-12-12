import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent2 from './Login2'
import './App.css'; // Importe o arquivo CSS para estilizar o formulário

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginComponent2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

