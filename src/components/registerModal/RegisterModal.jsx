import React from "react";
import { Link } from "react-router-dom";

export default function RegisterModal({ setLoginForm }) {
  return (
    <div className="modal">
      <h1>Cadastrar</h1>
      <form>
        <input type="text" name="nome" placeholder="Digite o seu nome" />
        <input type="text" name="whatsapp" placeholder="WhatsApp" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="text" name="senha" placeholder="Senha" />
        <button>Entrar</button>
        <Link onClick={setLoginForm}>Já tenho uma conta</Link>
      </form>
    </div>
  );
}
