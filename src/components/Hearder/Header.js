import Title from "./Title";
import Baseline from "./Baseline";
import Navigation from "../navigationBar/Navigation";

const Header = (props) => {
  return (
    <header>
      <Title className="title" title="My Blog" />
      <Baseline className="title" baseline="An awesome baseline" />
      <Navigation
        className="navigation"
        link1="Ecrire un message"
        link2="Rechercher un auteur"
        link3="Discutions"
        link4="Profil"
      />
    </header>
  );
};

export default Header;
