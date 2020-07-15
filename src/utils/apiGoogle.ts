import axios from "axios";
import { baseURL } from "./constantsGoogle";

const apiGoogle = axios.create({
  baseURL,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

export default apiGoogle;