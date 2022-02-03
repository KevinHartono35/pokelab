import React from 'react';
import {FavoritePokemonContainer, Header, PokemonList} from './containers';

export default function App() {
  return (
    <div className="App">
      <Header />
      <FavoritePokemonContainer />
      <PokemonList />
    </div>
  );
}
