import React, { useState } from "react";
import Card from "../../components/card/Card";
import Modal from "../../components/modal/Modal";
import NavBar from "../../components/navBar/NavBar";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <NavBar openModal={openModal} />
      <section className="input-section">
        <form>
          <h1>Pesquisar produtos</h1>
          <div className="form-inputs">
            <input
              type="text"
              name="produto"
              placeholder="pesquisar por nome"
            />
            <input
              type="number"
              min="0"
              name="preco-maximo"
              placeholder="preço máximo"
            />
          </div>
        </form>
      </section>
      <section className="products-section">
        <div className="products-container">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      {isModalOpen ? <Modal closeModal={closeModal} /> : null}
    </>
  );
}
