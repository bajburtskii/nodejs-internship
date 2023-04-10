const express = require('express')
const App = require('./App')
const httpStatus = require("http-status-codes")

class ExpressApp extends App {
  #port;
  #server;

  constructor(port) {
    super(port)
    this.#port = port
  }

  init() {
    this.#createServer()
    this.#addRoutes()
    return this.#listen()
  }

  #createServer() {
    return this.#server = express()
  }

  #addRoutes() {
    return this.#server.get('/', this.#getRequestListener())
  }

  #getRequestListener() {
    return (request, response) => {
      const html = '<h1>Hello Express</h1>'

      const headers = {
        "Content-Type": "text/html",
        "X-custom-header": "12312"
      }

      this.#writeOk(response, headers, html)
    }
  }

  #writeOk(response, headers, html) {
    response.status(httpStatus.OK);
    response.set(headers)
    response.send(html)
  }

  #listen() {
    return this.#server.listen(this.#port);
  }
}

module.exports = ExpressApp