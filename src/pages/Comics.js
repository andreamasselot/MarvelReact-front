import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Comics = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--fhdp7f7ffy5p.code.run/comics?title=${props.search}`
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
          {data.results.map((comics) => {
            return (
              <Card
                key={comics._id}
                name={comics.title}
                description={comics.description}
                image={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Comics;
