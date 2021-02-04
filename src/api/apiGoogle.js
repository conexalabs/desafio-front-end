import axios from 'axios';
import { baseURL } from './constantGoogle';

const apiGoogle = axios.create({
  baseURL,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

export default apiGoogle;
