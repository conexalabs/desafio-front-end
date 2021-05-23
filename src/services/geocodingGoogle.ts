import axios from "axios";

export const apiGecode = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode/",
});
