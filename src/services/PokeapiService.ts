import {axiosAPI} from './Request';

export async function GetPokemonList(offset = 0, limit = 16) {
  const result = await axiosAPI.get('pokemon', {
    params: {
      offset,
      limit,
    },
  });

  return result ? result.data : [];
}
