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
      <div className="fav-container">
        <section className="favorites-section ">
          <h1>Favorite Characters</h1>
          {heroes.map((elem) => {
            return (
              <>
                <div className="fav-div">
                  <img
                    src={elem.image}
                    alt="marvel images"
                    className="fav-images blue"
                  />

                  <h2>{elem.name}</h2>

                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      props.handleFavorites(elem);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </>
            );
          })}
        </section>
        <section className="favorites-section">
          <h1>Favorite Comics</h1>

          {comics.map((elem) => {
            return (
              <>
                <div className="fav-div">
                  <img
                    src={elem.image}
                    alt="marvel images"
                    className="fav-images purple"
                  />

                  <h2>{elem.name}</h2>

                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      props.handleFavorites(elem);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Favorites;
