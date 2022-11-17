import axios from "axios";
import { useEffect, useState } from "react";

import Card from "../components/Card";
const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/characters`);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="container">
        <div className="card-container">
          {data.results.map((character) => {
            return (
              <Card
                name={character.name}
                description={character.description}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Characters;
