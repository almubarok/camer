import { useState, useEffect } from "react";

export default function useGetpokemon() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const body = await res.json();
      setDatas(body.results);
    };
    getPokemon();
  });

  return datas;
}
