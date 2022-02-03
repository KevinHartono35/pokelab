import React, {useState, useEffect} from 'react';
import {Button, Card, Col, Container, Form, Pagination, Row, Spinner} from 'react-bootstrap';
import {GetPokemonList} from '../services';

interface PokemonItem {
  name: string;
  url: string;
}

interface PaginationProps {
  prev: number | null;
  next: number | null;
}

export default function PokemonList() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<PokemonItem[]>([]);

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(12);
  const [total, setTotal] = useState(0);
  const [paging, setPaging] = useState<PaginationProps>({
    prev: null,
    next: null,
  });

  useEffect(() => {
    fetchData();
  }, [offset, limit]);

  async function fetchData() {
    setIsLoading(true);
    const result = await GetPokemonList(offset, limit);

    const next = result.next
      ? parseInt(new URL(result.next).searchParams.get('offset') ?? '0')
      : null;
    const prev = result.previous
      ? parseInt(new URL(result.previous).searchParams.get('offset') ?? '0')
      : null;

    setPaging({next, prev});
    setTotal(result.count);
    setData(result.results);
    setIsLoading(false);
  }

  function handleClickPrev() {
    typeof paging.prev === 'number' && setOffset(paging.prev);
  }

  function handleClickNext() {
    typeof paging.next === 'number' && setOffset(paging.next);
  }

  return (
    <Container>
      <Row className="mb-3">
        <h1>Pokemon List</h1>
      </Row>
      <Row className="d-flex justify-content-end mb-3">
        <Col md="4" xl="3">
          <Form.Group>
            <Form.Label>Data per Page</Form.Label>
            <Form.Select onChange={e => setLimit(parseInt(e.target.value))}>
              <option>12</option>
              <option>24</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      {isLoading ? (
        <Row className="d-flex my-3 justify-content-center">
          <Spinner animation="border" role="status" />
        </Row>
      ) : (
        <Row>
          {data.map(({name, url}) => (
            <Col md="4" xl="3">
              <Card className="card-pokemon p-3 mb-5">
                <Card.Title className="text-capitalize">{name}</Card.Title>
                <Card.Text>Lorem Ipsum</Card.Text>
                <Button variant="primary shadow-none">Open Details</Button>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <Row className="d-flex justify-content-end">
        <Pagination className="d-flex justify-content-end align-items-center">
          <Pagination.Prev disabled={offset === 0} onClick={handleClickPrev} />
          <div className="mx-4">
            Showing {offset + 1} to {offset + limit < total ? offset + limit : total} from {total}{' '}
            items(s)
          </div>
          <Pagination.Next disabled={offset / limit + 1 >= total} onClick={handleClickNext} />
        </Pagination>
      </Row>
    </Container>
  );
}
