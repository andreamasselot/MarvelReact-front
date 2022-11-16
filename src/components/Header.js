import logo from "../assets/img/Marvel-logo.png";
const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo marvel" />
        </div>
        <nav className="menu">
          <button>Personnages</button>
          <button>Comics</button>
          <button>Favoris</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
