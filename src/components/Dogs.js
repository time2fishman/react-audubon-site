import React, { useState, useEffect } from "react";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  // console.log(dogs);

  useEffect(() => {
    const url = `https://api.api-ninjas.com/v1/dogs?trainability=5`;
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(url, {
      headers: new Headers({
        "x-api-key": apiKey,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json)
        setDogs(json);
      })
      .catch(console.error)
  }, []);

  return (
    <section className="container">
      {dogs.map((dog, index) => {
        return (
          <div className="card" key={index}>
          <div className="card-image">
            <img
              src={dog.image_link}
              alt={dog.name}
              />
          </div>
          <div className="card-title">
            <h3>{dog.name}</h3>
          </div>
        </div>
        )
      })}
    </section>
  );
};

export default Dogs;
