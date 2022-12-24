import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dogs = (props) => {



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
        props.setDogs(json);
      })
      .catch(console.error)
  }, []);

  return (
    <section onClick={props.handleClick} className="container">
      {props.dogs.map((dog, index) => {
        return (
          <Link to={`details/${dog.name}`} key={index}>
            <div className="card">
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
          </Link>
        )
      })}
    </section>
  );
};

export default Dogs;
