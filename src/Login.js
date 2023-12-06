import React from 'react';
import './App.css'; // Importe o arquivo CSS para estilizar o formulário

function LoginComponent() {
    return (
      <div className="box">
        <h1 className="heading">Login</h1>
        <input type="email" placeholder="Nome de usuário" autoComplete="off" className="email" required />
        <input type="password" placeholder="Senha" autoComplete="off" className="password" required />
        <button className="submit-btn">Entrar</button>
        <a href="/public/js/register.html" className="link">Ainda não tem uma conta?</a>
      </div>
    );
  }
  
  export default LoginComponent;