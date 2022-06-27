import "./About.scss";
import profilePic from "../../assets/images/profile-pic.jpg";

export const About = () => {
  return (
    <div className="about-container">
      <img src={profilePic} alt="" className="profile-pic" />
      <h1 className="name">Maruzs Luco</h1>
      <p className="text">Maruzs Luci vagyok, egy nagyon ugyes kismacska. Mindenfelet varrok es rajzolok. Szeretem a termeszetes es hazai cuccokat, mert egy environmentally conscious kiscica vagyok. Ha osztod a nezeteimet es tetszenek a holmijaim, rendelj valamit pls :3 </p>
    </div>
  );
}