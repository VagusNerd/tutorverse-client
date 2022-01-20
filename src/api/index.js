import axios from 'axios';

const API = axios.create({ baseURL: "https://tutorverse-api2.herokuapp.com/"})

export default API;