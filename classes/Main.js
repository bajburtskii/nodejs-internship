class Main {
  #server

  constructor(server) {
    this.#server = server
  }

  run() {
    return this.#server.run()
  }
}

module.exports = Main