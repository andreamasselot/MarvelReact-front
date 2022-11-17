import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <>
      <div className="heroes-container">
        {props.link ? (
          <Link to={props.link}>
            <figure>
              <FontAwesomeIcon
                className="heart-plus-icon"
                icon="heart-circle-plus"
              />
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
            <FontAwesomeIcon
              className="heart-plus-icon"
              icon="heart-circle-plus"
            />
          </figure>
        )}

        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
};
export default Card;
