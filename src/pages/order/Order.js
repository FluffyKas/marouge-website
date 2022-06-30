import "./Order.scss";

export const Order = () => {
  return (
    <div className="order-container">
      <h1>Rendelés</h1>
      <p>A rendelés egyelőre e-mailben vagy Instagram üzenetben történik. Keress bizalommal, megbeszéljük a részleteket, fizetési és szállítási módot, aztán már fel is adom neked és napokon belül érkezik a kiválasztott holmi!</p>
      <p>Mivel elég friss a márka és még tanulok-fejlődök, egyelőre 2 fizetési módot tudok ajánlani neked:</p>
      <ul>
        <li>utánvét</li>
        <li>előre utalás bankszámlára</li>
      </ul>
      <p>A szállítási módok pedig a következők:</p>
      <ul>
        <li>Packeta 670 Ft-tól</li>
        <li>Foxpost 1199 Ft-tól</li>
        <li>postai csomagküldés (DRÁGA)</li>
        <li>reméljük egyszer majd GLS</li>
        <li>személyes átvétel Pécsen?</li>
      </ul>
    </div>
  );
}