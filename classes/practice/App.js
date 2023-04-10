const http = require("http")
const httpStatus = require("http-status-codes")

class App {
  #port;
  #server;

  constructor(port) {
    this.#port = port
  }

  init() {
    this.#createServer()
    return this.#listen()
  }

  #createServer() {
    return this.#server = http.createServer(this.#getRequestListener());
  }

  #listen() {
    return this.#server.listen(this.#port);
  }

  #getRequestListener() {
    return (request, response) => {
      this.#log("Received an incoming request!")

      const headers = {
        "Content-Type": "text/html",
        "X-custom-header": "12312"
      }

      const html = '<h1>Hello, Http!</h1>'

      this.#writeOk(response, headers, html)

      this.#log(`Sent a response : ${html}`)
    }
  }

  #writeOk(response, headers, html) {
    response.writeHead(httpStatus.OK, headers);
    response.write(html);
    response.end();
  }

  #log(msg) {
    console.log(msg);
  }
}

module.exports = App