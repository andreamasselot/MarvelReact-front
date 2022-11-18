import { Link } from "react-router-dom";

import logo from "../assets/img/Marvel-logo.png";
const Header = (props) => {
  const handleSearch = (event) => {
    const value = event.target.value;
    props.setSearch(value);
  };
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
            <Link
              to={"/"}
              onClick={() => {
                props.setSearch("");
              }}
            >
              Characters
              <div class="bar"></div>
            </Link>
            <Link
              to={"/comics"}
              onClick={() => {
                props.setSearch("");
              }}
            >
              Comics{" "}
            </Link>
            <Link to={"/"}>Favorites </Link>
          </nav>
          <input
            type="text"
            placeholder="Search"
            value={props.search}
            onChange={handleSearch}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
