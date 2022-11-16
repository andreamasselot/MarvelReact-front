import { Link } from "react-router-dom";

import logo from "../assets/img/Marvel-logo.png";
const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo marvel" />
        </div>
        <nav className="menu">
          <Link to={"/"}>PERSONNAGES </Link>
          <Link to={"/"}>COMICS </Link>
          <Link to={"/"}>FAVORIS </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
