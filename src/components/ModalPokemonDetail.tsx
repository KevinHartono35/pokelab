import React, {useEffect, useState} from 'react';
import {Accordion, Modal} from 'react-bootstrap';
import {PokemonItem} from '../containers/PokemonList';
import {GetPokemonDetail} from '../services';

interface ModalPokemonDetailProps {
  data?: PokemonItem;
  handleHide(): void;
}

export default function ModalPokemonDetail({data, handleHide}: ModalPokemonDetailProps) {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    data && fetchData(data.url);
  }, [data]);

  async function fetchData(url: string) {
    const result = await GetPokemonDetail(url);

    setDetail(result);
  }

  return (
    <Modal show={data !== undefined} onHide={handleHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="text-capitalize">{data?.name} Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Accordion>
          {Object.keys(detail).map((val, index) => (
            <Accordion.Item eventKey={index.toString()}>
              <Accordion.Header>{val}</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Modal.Body>
    </Modal>
  );
}
