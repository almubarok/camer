import { useState, useEffect } from 'react';

// export default function Pokemon() {
//   const [pokemons, setPokemon] = useState([]);

//   const getPokemon = async () => {
//     const response = await fetch('https://pokeapi.co/api/v2/berry/');
//     const res = await response.json();
//     setPokemon(res.results);
//   };

//   useEffect(() => {
//     getPokemon();
//   }, []);

//   return (
//     <>
//       {pokemons.map((v) => {
//         return (
//           <>
//             <a target='_blank' href={v.url} key={v.url}>
//               {v.name}
//             </a>
//             <br />
//           </>
//         );
//       })}
//     </>
//   );
// }

export default function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const [idPokemon, setIdPokemon] = useState(1);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/berry/' + idPokemon
      );
      const res = await response.json();
      setPokemon(res);
    };
    getPokemon();
  }, [idPokemon]);

  const handleIdPokemon = (e) => {
    setIdPokemon(e.target.value);
  };

  return (
    <>
      <input type='number' value={idPokemon} onChange={handleIdPokemon} />{' '}
      <br />
      Pokemon name: {pokemon?.name} <br />
      firmness: {pokemon?.firmness?.name}
    </>
  );
}
