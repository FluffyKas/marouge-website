import logo from "../../assets/images/logo.jpg";
import "./Catalogue.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Catalogue = () => {
  const [opened, setOpened] = useState(false)

  const openModal = () => {
    setOpened(!opened);
  }

  return (
    <div className="catalogue-container">
      <h1>Termekek</h1>
      <div className="product-grid">
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn" onClick={openModal}>Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <Link to="/product" className="details-btn">Reszletek</Link>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn" onClick={openModal}>Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn" onClick={openModal}>Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn" onClick={openModal}>Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn" onClick={openModal}>Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn" onClick={openModal}>Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn" onClick={openModal}>Reszletek</button>
          </div>
        </article>
      </div>
      {opened && <div className="modal">
        <img src={logo} alt="Marouge" />
        <div className="details">
          <div>
            <h2>Termek neve</h2>
            <p>Termek ara</p>
          </div>
          <button className="details-btn" onClick={openModal}>Bezaras</button>
        </div>
      </div>}
    </div>
  );
}
