import React, { useEffect, useState } from "react";

export default function App() {
  const URL = "http://localhost:5001";
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    fetch(`${URL}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPokemones(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {pokemones.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
