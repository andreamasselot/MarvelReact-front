const Favorites = (props) => {
  const heroes = [];
  const comics = [];

  for (let i = 0; i < props.favorites.length; i++) {
    if (props.favorites[i].type === "heroes") {
      heroes.push(props.favorites[i]);
    } else {
      comics.push(props.favorites[i]);
    }
  }
  return (
    <>
      <div>
        {heroes.map((elem) => {
          return (
            <>
              <section className="container ">
                <h2>{elem.name}</h2>
                <img src={elem.image} alt="marvel images" />
                <button>Remove</button>
              </section>
            </>
          );
        })}
        {comics.map((elem) => {
          return (
            <>
              <section className="container">
                <h2>{elem.name}</h2>
                <img src={elem.image} alt="marvel images" />
                <button>Remove</button>
              </section>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
