import React, { useState } from "react";
import Dogs from "./components/Dogs";
import DogDetails from "./components/DogDetails";
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  const [dogs, setDogs] = useState([]);
  const [clickedDog, setClickedDog] = useState()

  const handleClick = (e) => {
    e.preventDefault()
    setClickedDog(e.target.getAttribute('alt'))
  }
  // console.log(clickedDog)

  return (
    <>
      <header>
        <h1>
          <Link to="/">Dogs</Link>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Dogs dogs={dogs} setDogs={setDogs} handleClick={handleClick} />} />
          <Route path='details/:name' element={<DogDetails clickedDog={clickedDog} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
