import React from "react";
import DeletableCard from "../../components/deletableCard/DeletableCard";
import NavBar from "../../components/navBar/NavBar";

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <section className="input-section">
        <form>
          <h1>Cadastrar produtos</h1>
          <div className="product-inputs">
            <input
              type="text"
              name="nome-produto"
              placeholder="Nome do produto"
            />
            <input
              type="number"
              min="0"
              name="preco-produto"
              placeholder="Preço do produto"
            />
            <button>Adicionar produto</button>
          </div>
        </form>
      </section>
      <section className="products-section">
        <div className="products-container">
          <DeletableCard />
          <DeletableCard />
          <DeletableCard />
        </div>
      </section>
    </>
  );
}
