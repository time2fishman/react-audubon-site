import React, { useState, useEffect } from "react";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const url = `https://api.api-ninjas.com/v1/dogs?name=poodle`;
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(url, {
      headers: new Headers({
        "x-api-key": `${apiKey}`,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setDogs(json);
        console.log(dogs);
      });
  }, []);

  return (
    <div>
      <h1>Dogs component</h1>
    </div>
  );
};

export default Dogs;
