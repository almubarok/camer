import { useLocation } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { formatUppercase } from "../helper/helper";
import { Link } from "react-router-dom";

export default function Category() {
  const [pokemons, setPokemons] = useState([]);
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const url = query.get("url");
  const by = query.get("by");
  const value = query.get("value");

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(url);
      const body = await response.json();
      setPokemons(body.pokemon);
    };
    getPokemon();
  }, [url]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Pokemon with {by}: {formatUppercase(value)}
        </Card.Title>
        <Card.Text>
          {pokemons.map((v) => {
            return (
              <Button
                variant="outline-primary"
                className="m-2"
                key={v.pokemon.url}
              >
                <Link to={`/detail?url=${v.pokemon.url}`}>
                  {formatUppercase(v.pokemon.name)}
                </Link>
              </Button>
            );
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
