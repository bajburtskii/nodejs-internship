class InitInterface {
  constructor() {
    if (typeof this.init !== 'function') {
      throw new Error()
    }
  }
}

module.exports = InitInterface