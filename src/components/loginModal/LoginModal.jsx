import React from "react";
import { Link } from "react-router-dom";
export default function LoginModal({ setRegisterForm }) {
  return (
    <div className="modal">
      <h1>Entrar</h1>
      <form>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="text" name="senha" placeholder="Senha" />
        <button>Entrar</button>
        <Link onClick={setRegisterForm}>Criar Conta</Link>
      </form>
    </div>
  );
}
