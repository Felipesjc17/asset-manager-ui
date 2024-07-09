import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.example.com', // Altere para a URL base da sua API
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})
