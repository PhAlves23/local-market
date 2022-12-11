import React from "react";
export default function DeletableCard() {
  return (
    <div className="card">
      <button>Excluir</button>
      <h2>Brigadeiro Gourmet</h2>
      <span>R$ 5,00</span>
      <div className="card-info">
        <div className="card-info-detail">
          <p>Brigaderia do seu Zé</p>
        </div>
        <div className="card-info-detail">
          <p>11 9999-9999</p>
        </div>
      </div>
    </div>
  );
}
