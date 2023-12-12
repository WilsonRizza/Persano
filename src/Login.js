import React from 'react';
import './App.css'; // Importe o arquivo CSS para estilizar o formulário



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