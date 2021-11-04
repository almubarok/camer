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
  const [angka1, setAngka1] = useState(1);
  const [angka2, setAngka2] = useState(1);
  const [pokemon, setPokemon] = useState(1);

  useEffect(() => {
    // alert("useeffect tertrigger")
    const getPokemon = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/berry/' + angka1
      );
      const res = await response.json();
      setPokemon(res);
    };
    getPokemon();
    // alert("Component di mount")
  },[angka1]);

  const handleAngka1 = (e) => {
    setAngka1(e.target.value);
  };

  const handleAngka2 = (e) => {
    setAngka2(e.target.value);
  };

  return (
    <>
    <div>Ini component</div>
    <input type='number' value={angka1} onChange={handleAngka1} />
    <input type='number' value={angka2} onChange={handleAngka2} />
      <br />
      Pokemon name: {pokemon?.name} <br />
      firmness: {pokemon?.firmness?.name} 
    </>
  );
}
