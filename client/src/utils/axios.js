import axios from 'axios'
import { BACKEND_URL } from '../constants'

// axios configuration
export default axios.create({
  baseURL: BACKEND_URL,
})
