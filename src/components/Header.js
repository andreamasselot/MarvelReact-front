import { Link } from "react-router-dom";

import logo from "../assets/img/Marvel-logo.png";
const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="logo marvel" />
          </Link>
        </div>
        <div className="banner"></div>
        <div className="bottom-nav">
          <nav className="menu">
            <Link to={"/"}>Characters</Link>
            <Link to={"/comics"}>Comics </Link>
            <Link to={"/"}>Favorites </Link>
          </nav>
          <input type="text" placeholder="Search" />
        </div>
      </header>
    </>
  );
};

export default Header;
