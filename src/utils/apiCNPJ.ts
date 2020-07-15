import axios from "axios";
import { baseURL } from "./constants";

const apiCNPJ = axios.create({
  baseURL,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

export default apiCNPJ;