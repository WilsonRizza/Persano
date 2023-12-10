import React from 'react';
import './App.css'; // Importe o arquivo CSS para estilizar o formulário
import { getUsuario, validarusuario } from './api';
import { useState } from 'react';
import { useHistory } from "react-router-dom"

  function Login() {
  // Defina os estados para os valores dos campos do formulário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  let history = useHistory();


  const handleSubmit = (event) => {
    event.preventDefault();

    Logar(email, senha);
    // limparCampos();
  };
  
  // Função para limpar os campos do formulário
  const limparCampos = () => {
    setEmail('');
    setSenha('');
  };
  // Função para logar
  const Logar = async (email, senha) => {

    const parametros = {email, senha};

    const resultado = await validarusuario(parametros)
      if(resultado.status === true){
        history.push('/cadastro')
        window.location.reload();
    } else {
      window.alert("Login ou senha inválidos")
    }
  };


 return (
  <div className="box">
    <h1 className="heading">Login</h1>
    <form onSubmit={handleSubmit}>
      <input 
      type="email" 
      placeholder="email" 
      autoComplete="off" 
      className="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)} 
      required 
      />
      <input
        type="password"
        placeholder="Senha"
        autoComplete="off"
        className="senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button className="submit">Entrar</button>
      <a href="/cadastro" className="link">Ainda não tem uma conta?</a>
    </form>
  </div>
);
}
  export default Login;