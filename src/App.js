import React from 'react';
import './App.css'; // Importe o arquivo CSS para estilizar o formulário

function App() {
  return (
    <div className="box">
      <h1 className="heading">Cadastro</h1>
      <form action="form" id="formulario">
        <input type="text" placeholder="Nome de usuário" autoComplete="off" className="nome" required />
        <input type="email" placeholder="Email" autoComplete="off" className="email" required />
        <input type="password" placeholder="Senha" autoComplete="off" className="password" required />
        <button className="submit-btn">Registrar</button>
        <a href="./login.html" className="link">Já está cadastrado?</a>
      </form>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector("#formulario");
  const nome = document.querySelector('.nome');
  const email = document.querySelector('.email');
  const password = document.querySelector('.password');
  const submitBtn = document.querySelector('.submit-btn');

  if (formulario) {
    formulario.addEventListener('submit', function (event) {
      event.preventDefault();

      cadastrar(nome, email, password);
      limpar(nome, email, password);
    });
  } else {
    console.error('Elemento <form> não encontrado no DOM');
  }
});

export function cadastrar(nome, email, password) {
  fetch("http://localhost:3000/cadastrar",
      {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          method:'POST',
          body: JSON.stringify({
              nome: nome.value,
              email: email.value,
              senha: password.value,
          })
      })
      .then(function (res) { console.log(res) })
      .catch(function (res) { console.log(res) })
}

function limpar(nome, email, password) {
  nome.value = "";
  email.value = "";
  password.value = "";
}

export default App;

