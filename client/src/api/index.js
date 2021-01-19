import axios from 'axios';

// api base-url (that you created on server side)
const url = 'http://localhost:8080/api/v1';

// current method: GET
// current path: http://localhost:8080/api/v1/example
export const getPeople = () => axios.get(`${url}/people`);

// current method: POST
// current path: http://localhost:8080/api/v1/example/upload
export const newPerson = (form) => axios.post(`${url}/people/new`, form);
