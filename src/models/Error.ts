export default class Error {
  message: string

  response: string

  code: string

  constructor(message: string, response: string, code: string) {
    this.message = message
    this.response = response
    this.code = code
  }
}
