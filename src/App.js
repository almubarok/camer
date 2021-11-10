import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import useGetPokemon from "./hooks/useGetPokemon";

function App() {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(1);
  const pokemons = useGetPokemon();

  // const [pokemons, setPokemons] = useState([]);
  // useEffect(() => {
  //   const getPokemon = async () => {
  //     const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  //     const body = await res.json();
  //     console.log(body);
  //     setPokemons(body.results);
  //   };
  //   getPokemon();
  // }, []);

  const counterStyle = {
    color: counter < 0 ? "red" : counter >= 100 ? "green" : "",
  };

  return (
    <div className="App">
      <h3 data-testid="header">My Counters</h3>

      <p style={counterStyle} data-testid="counter">
        {counter}
      </p>

      <button
        data-testid="btnDecrement"
        onClick={() => setCounter(counter - amount)}
      >
        -
      </button>
      <input
        data-testid="input"
        value={amount}
        type="number"
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button
        data-testid="btnIncrement"
        onClick={() => setCounter(counter + amount)}
      >
        +
      </button>

      {pokemons.map((v, i) => {
        return (
          <p key={i} data-testid="pokemon">
            {v.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
