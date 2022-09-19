// axios is a popular fetching library

import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/clone-react-f9f59/us-central1/api" //the api (cloud functuon url)
});

export default instance;
