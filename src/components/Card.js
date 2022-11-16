const Card = (props) => {
  return (
    <>
      <div className="heroes-container">
        <img className="hero-images" src={props.image} alt="hero images" />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
};
export default Card;
