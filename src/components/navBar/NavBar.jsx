import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function NavBar({ openModal }) {
  const [userData, setUserData] = useContext(UserContext);
  alert(userData.message);
  return (
    <nav>
      <div className="nav-container">
        {/* <img src="" alt="" /> */}
        <p>LOGO</p>
        {userData.isLogged ? (
          <button className="navbar-btn" onClick={openModal}>
            Sair
          </button>
        ) : (
          <button className="navbar-btn" onClick={openModal}>
            Entrar
          </button>
        )}
      </div>
    </nav>
  );
}
