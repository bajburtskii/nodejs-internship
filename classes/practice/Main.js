class Main {
  #app

  constructor(app) {
    this.#app = app
  }

  init() {
    return this.#app.init()
  }
}

module.exports = Main