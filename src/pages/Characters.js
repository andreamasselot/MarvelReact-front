import axios from "axios";
import { useEffect, useState } from "react";

import Card from "../components/Card";
const Characters = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--fhdp7f7ffy5p.code.run/characters?name=${props.search}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [props.search]);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="container">
        <div className="card-container">
          {data.results.map((character) => {
            return (
              <Card
                key={character._id}
                name={character.name}
                description={character.description}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                link={`/comics/${character._id}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Characters;
