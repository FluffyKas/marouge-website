import "./About.scss";
import profilePic from "../../assets/images/profile-pic.jpg";

export const About = () => {
  return (
    <div className="about-container">
      <img src={profilePic} alt="" className="profile-pic" />
      <h1 className="name">Marouge</h1>
      <h2>varrott és rajzolt holmik</h2>
      <p className="text">Maruzs Luca vagyok, a márka kitalálója, megalkotója, varrónője, grafikusa és mindenese.
        Évek óta álmodozom róla, hogy egyszer elinduljak ezen az úton, és végre azzal foglalkozzak, amit ennyire szeretek.
        Egy pár éve elkerülhetetlenné vált, hogy elkezdjek átváltani egy (legalább kicsit) környezettudatosabb életmódra. Itt jött be a képbe az alapvető személyiségjegyem, hogy „csináljunk meg mindent házilag, ha lehet”. Nagyjából egy éve nekikezdtem a varrásnak, azonnal megszerettem, és azóta is csak keresem és próbálgatom az újabb, hasznosabb és praktikusabb ötleteket. Egy olyan hobbi lett ráadásul, amivel segíthetek másoknak elhagyni sok-sok műanyagot és szemetet. Most pedig ezt próbálom a szakmámmá formálni.
        A rajzolás, grafika is csak egy pár éve lett az egyik kedvenc időtöltésem, hipp-hopp nagyon megszerettem a digitális rajzolást minden egyszerűségével és bonyolultságával együtt. A kedvenc témám itt is a természet, oda húz a kicsi szívem.
        Próbálom a márkát is minél zöldebb útra terelni, mindenre természetes és környezettudatos verziót kitalálni.
        Pls be nice és vegyél sok szép dolgot!
      </p>
    </div>
  );
}