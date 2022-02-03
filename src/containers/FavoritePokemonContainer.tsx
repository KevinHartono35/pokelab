import React, {useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';

export default function FavoritePokemonContainer() {
  const local = localStorage.getItem('favorite-pokemon');

  return (
    <Container className="mb-5">
      <Row>
        <h1>Favorito</h1>
      </Row>
      <Row>
        <h2>{local && JSON.parse(local).name}</h2>
      </Row>
    </Container>
  );
}
