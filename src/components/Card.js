const Card = (props) => {
  return (
    <>
      <div className="heroes-container">
        <figure>
          <img className="hero-images" src={props.image} alt="hero images" />
        </figure>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
};
export default Card;
