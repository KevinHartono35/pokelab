import React, {useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';

export default function FavoritePokemonContainer() {
  return (
    <Container className="mb-5">
      <Row>
        <h1>Favorito</h1>
      </Row>
      <Row>
        <h2>{JSON.parse(localStorage.getItem('favorite-pokemon') || '')?.name}</h2>
      </Row>
    </Container>
  );
}
