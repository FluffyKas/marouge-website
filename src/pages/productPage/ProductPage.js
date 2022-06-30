import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import "./ProductPage.scss";

export const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="product-container">
        <div className="container-left">
          <img src={logo} className="product-illustration" alt="Marouge" />
          <div className="swatches">
            <button className="swatch-img"><img src={logo} alt="test-img" /></button>
            <button className="swatch-img"><img src={logo} alt="test-img" /></button>
            <button className="swatch-img"><img src={logo} alt="test-img" /></button>
            <button className="swatch-img"><img src={logo} alt="test-img" /></button>
          </div>
        </div>
        <div className="container-right">
          <h2>Termek neve</h2>
          <p>Termek ara</p>
          <h3>Mibul van, mire jo?</h3>
          <p>Csupa termeszetes cucc. Jo mindenre \o/</p>
          <Link to="/katalogus" className="details-btn">Vissza</Link>
        </div>
      </div>
    </div>
  );
}