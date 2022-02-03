import axios from 'axios';

export const axiosAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
