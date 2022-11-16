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
          <Link to={"/"}>Characters </Link>
          <Link to={"/"}>Comics </Link>
          <Link to={"/"}>Favorites </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
