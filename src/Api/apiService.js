import axios from 'axios';

import { IPAPI } from './baseApi';

const getResponseIPAPI = axios.create({
  baseURL: IPAPI,
  method: 'get',
  headers: { 'Content-Type': 'application/json' }
});

export const getIpDetails = (ip) => getResponseIPAPI(`${ip}/json`);