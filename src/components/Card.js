import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="heroes-container">
        {props.link ? (
          <Link to={props.link}>
            <figure>
              <img
                className="hero-images"
                src={props.image}
                alt="hero images"
              />
            </figure>
          </Link>
        ) : (
          <figure>
            <img className="hero-images" src={props.image} alt="hero images" />
          </figure>
        )}

        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
};
export default Card;
