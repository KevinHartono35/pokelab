import React, {useState, useEffect} from 'react';
import {Button, Card, Col, Container, Form, Pagination, Row} from 'react-bootstrap';
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
  const [data, setData] = useState<PokemonItem[]>([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [total, setTotal] = useState(0);
  const [pageOffset, setPageOffset] = useState<PaginationProps>({
    prev: null,
    next: null,
  });

  useEffect(() => {
    fetchData(0);
  }, []);

  async function fetchData(offset: number) {
    const result = await GetPokemonList(offset, limit);

    const next = result.next
      ? parseInt(new URL(result.next).searchParams.get('offset') ?? '0')
      : null;
    const prev = result.prev
      ? parseInt(new URL(result.prev).searchParams.get('offset') ?? '0')
      : null;

    setPageOffset({next, prev});
    setPage(offset / result.count);
    setTotal(Math.ceil(result.count / limit));
    setData(result.results);
  }

  function handleClickPrev() {
    pageOffset.prev && fetchData(pageOffset.prev);
  }

  function handleClickNext() {
    pageOffset.next && fetchData(pageOffset.next);
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
              <option>36</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
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
      <Row className="d-flex justify-content-end">
        <Pagination className="d-flex justify-content-end align-items-center">
          <Pagination.Prev disabled={page === 1} onClick={handleClickPrev} />
          <div className="mx-4">
            Page {page} of {total}
          </div>
          <Pagination.Next disabled={page === total} onClick={handleClickNext} />
        </Pagination>
      </Row>
    </Container>
  );
}
