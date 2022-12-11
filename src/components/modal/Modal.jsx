import React, { useState } from "react";
import LoginModal from "../loginModal/LoginModal";
import RegisterModal from "../registerModal/RegisterModal";

export default function Modal({ closeModal }) {
  const [isLogin, setIsLogin] = useState(true);

  function setLoginForm() {
    setIsLogin(true);
  }

  function setRegisterForm() {
    setIsLogin(false);
  }

  return (
    <div className="backdrop">
      <button className="close-modal-btn" onClick={closeModal}>
        Fechar
      </button>
      {isLogin ? (
        <LoginModal setRegisterForm={setRegisterForm} />
      ) : (
        <RegisterModal setLoginForm={setLoginForm} />
      )}
    </div>
  );
}
