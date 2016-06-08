import axios from 'axios';


export const FETCH_BANK = 'FETCH_BANK';

export function fetchBanks(city) {
  const url = `https://app.fyle.in/api/bank_branches?city=${city}&offset=0&limit=50`;
  const request = axios.get(url);

  return {
    type: FETCH_BANK,
    payload: request
  };
}