import axios from 'axios';

// api url (where your serve is hosted at)
export const backendUrl = 'http://localhost:8080';

// axios configuration
export default axios.create({
  baseURL: backendUrl,
});
