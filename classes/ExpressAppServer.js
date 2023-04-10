const express = require('express')
const AppServer = require("./AppServer")


class ExpressAppServer extends AppServer {

  #port
  #server

  constructor(logService, writeResponseService, port = 3000) {
    super(logService, writeResponseService, port)
    this.#port = port
  }

  run() {
    this.#createServer();

    return this.#listen();
  }

  #createServer()
  {
    const app = express()

    app.get('/', (req, res) => {
      res.send('Hello ExpressAppServer!')
    })

    this.#server = app
  }

  #listen()
  {
    this.#server.listen(this.#port, () => {
      console.log(`Example app listening on port ${this.#port}`)
    })
  }

}

module.exports = ExpressAppServer