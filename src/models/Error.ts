export default class Error {
  message: string

  response: string

  constructor(message: string, response: string) {
    this.message = message
    this.response = response
  }
}
