import React, { useState } from 'react';
import './Cadastrar.css'; 
import {cadastrarUsuario, getUsuario} from './api'
import { useHistory } from "react-router-dom"

function Cadastro() {
  // Defina os estados para os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  let history = useHistory();

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Executar a lógica desejada aqui
    cadastrar(nome, email, senha);
    limparCampos();
  };

  // Função para limpar os campos do formulário
  const limparCampos = () => {
    setNome('');
    setEmail('');
    setSenha('');
  };

  // Função para cadastrar os dados
  const cadastrar = async (nome, email, senha) => {
    
    // montando objeto para passar no body da requisicao
    const parametros = { usuario: nome, email, senha };

    // chamando a api na rota cadastrarusuario
    const resultado = await cadastrarUsuario(parametros)
    if(resultado.status){
        console.log(resultado.dados)
        history.push('/')
        window.location.reload();
    }
  };

  return (
    <div className="box">
      <h1 className="heading">Cadastrar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome de usuário"
          autoComplete="off"
          className="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
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
        <button type="submit" className="submit">
          Cadastrar
        </button>
      </form>
      <a href="/public/js/register.html" className="link">
        Ainda não tem uma conta?
      </a>
    </div>
  );
}

export default Cadastro;
