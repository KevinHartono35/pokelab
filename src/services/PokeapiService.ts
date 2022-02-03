import axios from 'axios';
import {axiosAPI} from './Request';

export async function GetPokemonList(offset = 0, limit = 16) {
  const result = await axiosAPI.get('pokemon', {
    params: {
      offset,
      limit,
    },
  });

  return result ? result.data : null;
}

export async function GetPokemonDetail(url: string) {
  const result = await axios.get(url);

  return result ? result.data : null;

  //Types
  //https://github.com/monbrey/pokeapi-typescript/blob/master/src/interfaces/Pokemon/Pokemon.ts
}

//https://pokeapi.co/docs/v2#pokemon
