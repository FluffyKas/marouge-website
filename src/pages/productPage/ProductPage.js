import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import "./ProductPage.scss";

export const ProductPage = () => {
  return (
    <div className="product-container">
      <div className="product-descr">
        <img src={logo} alt="Marouge" />
        <div className="details">
          <div>
            <h2>Termek neve</h2>
            <p>Termek ara</p>
            <h3>Mibul van, mire jo?</h3>
            <p>Csupa termeszetes cucc. Jo mindenre \o/</p>
          </div>
        </div>
      </div>
      <Link to="/katalogus" className="details-btn">Vissza</Link>
    </div>
  );
}