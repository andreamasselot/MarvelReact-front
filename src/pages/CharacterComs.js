import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../components/Card";

const CharacterComs = (props) => {
  const { characterId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--fhdp7f7ffy5p.code.run/comics/${characterId}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <section className="heroes-identity container ">
        <figure className="id-picture">
          <img
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt="hero id photos"
          />
        </figure>
        <div className="details-id">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <button
            onClick={(event) => {
              props.handleFavorites({
                image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
                name: data.name,
                type: "heroes",
                id: data._id,
              });
            }}
          >
            <FontAwesomeIcon icon="plus" /> Add to Favorites
          </button>
        </div>
      </section>
      <div className="container">
        <div className="comics-container">
          {data.comics.map((elem, index) => {
            return (
              <Card
                key={elem._id}
                id={elem._id}
                name={elem.title}
                description={elem.description}
                image={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                handleFavorites={props.handleFavorites}
                type="comics"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CharacterComs;
