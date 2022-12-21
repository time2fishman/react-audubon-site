import React from "react";
import Dogs from "./components/Dogs";

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
        </h1>
      </header>
      <main>
        <Dogs />
      </main>
    </>
  );
}

export default App;
