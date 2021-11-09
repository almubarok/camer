import { useEffect, useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import CardList from "../components/CardList";

export default function Home() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(url);
      const body = await response.json();
      setPokemons(body);
    };
    getPokemons();
  }, [url]);

  const handleChangePage = (url) => {
    setUrl(url);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>List Pokemons </Card.Title>
        <Card.Text className="mt-5">
          <Row>
            {pokemons?.results?.map((v) => {
              return <CardList key={v.url} title={v.name} url={v.url} />;
            })}
          </Row>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button
          disabled={pokemons?.previous === null}
          className="m-2"
          onClick={() => handleChangePage(pokemons?.previous)}
        >
          Previous
        </Button>
        <Button
          disabled={pokemons?.next === null}
          className="m-2"
          onClick={() => handleChangePage(pokemons?.next)}
        >
          Next
        </Button>
      </Card.Footer>
    </Card>
  );
}
