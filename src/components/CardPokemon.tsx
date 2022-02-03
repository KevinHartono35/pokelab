import {Card, Row, Col, Button, Form} from 'react-bootstrap';
import {PokemonItem} from '../types';

interface CardPokemonProps {
  data: PokemonItem;
  handleClickDetail(): void;
}

export default function CardPokemon({data, handleClickDetail}: CardPokemonProps) {
  function handleFavorite() {
    localStorage.setItem('favorite-pokemon', JSON.stringify(data));
    window.location.reload();
  }

  return (
    <Card className="card-pokemon p-3 mb-5">
      <Card.Title className="text-capitalize">{data.name}</Card.Title>
      <Card.Text>Lorem Ipsum</Card.Text>
      <Row>
        <Col className="d-flex justify-content-between">
          <Button variant="primary px-5" onClick={handleClickDetail}>
            Details
          </Button>
          <Button variant="info" type="submit" onClick={handleFavorite}>
            Favorite
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
