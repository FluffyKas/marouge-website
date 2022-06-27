import logo from "../../assets/images/logo.jpg";
import "./Catalogue.scss";

export const Catalogue = () => {
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
            <button className="details-btn">Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn">Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn">Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn">Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn">Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn">Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn">Reszletek</button>
          </div>
        </article>
        <article className="product">
          <img src={logo} alt="Marouge" />
          <div className="details">
            <div>
              <h2>Termek neve</h2>
              <p>Termek ara</p>
            </div>
            <button className="details-btn">Reszletek</button>
          </div>
        </article>
      </div>
    </div>
  );
}
