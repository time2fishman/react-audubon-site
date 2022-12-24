import React, { useState, useEffect } from 'react';

const DogDetails = (props) => {
    const [currentDog, setCurrentDog] = useState([])

    useEffect(() => {
        const url = `https://api.api-ninjas.com/v1/dogs?name=${props.clickedDog}`;
        const apiKey = process.env.REACT_APP_API_KEY;
        fetch(url, {
            headers: new Headers({
                "x-api-key": apiKey,
            }),
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setCurrentDog(json);
                // console.log(currentDog)
            })
            .catch(console.error)
    }, []);

    //this will render as long as currentDog is null
    if (!currentDog[0]) {
        return <p>Loading dog information ...</p>
    }

    // this will render if the above if statement is no longer true
    return (
        <div className="details-container">
            <img
                src={currentDog[0].image_link}
                alt={currentDog[0].name}
            />
            <div className="details">
                <h2>{currentDog[0].name}</h2>
                <h3>Energy: {currentDog[0].energy}</h3>
                <h3>Shedding: {currentDog[0].shedding}</h3>
                <h3>Playfulness: {currentDog[0].playfulness}</h3>
                <h3>Trainability: {currentDog[0].trainability}</h3>
                <h3>Protectiveness: {currentDog[0].protectiveness}</h3>
                <p>
                    <a
                        href='https://www.akc.org/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        AKC Details
                    </a> about this breed.
                </p>
            </div>
        </div>
    );
};

export default DogDetails;