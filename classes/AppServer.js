const http = require("http");
const httpStatus = require("http-status-codes");

class AppServer {

  #logService
  #writeResponseService
  #port
  #server

  constructor(logService, writeResponseService, port = 3000) {
    this.#logService = logService
    this.#writeResponseService = writeResponseService

    this.#port = port
  }

  run() {
    this.#createServer();

    return this.#listen();
  }

  #createServer()
  {
    const routeResponseMap = {
      "/info": "<h1>Info Page</h1>",
      "/contact": "<h1>Contact Us</h1>",
      "/about": "<h1>Learn More About Us.</h1>",
      "/hello": "<h1>Say hello by emailing us here</h1>",
      "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
    };

    // stateless

    this.#server = http.createServer();

    this.#server.on('request', (request, response) => {

      let body = []

      request
        .on('data', (chunk) => {
          body.push(chunk)
          console.log('chunk', chunk)
        })
        .on('end', () => {
          body = Buffer.concat(body).toString()

          console.log(body)
        })

      if (routeResponseMap[request.url]) {
        response.end(routeResponseMap[request.url]);
      } else {
        response.end("1");
      }


      // this.#logService.handle("Received an incoming request!");

      // const headers = {
      //   "Content-Type": "text/html",
      // }
      //
      // const html = "<h1>Hello, AppServer!</h1>"
      //
      // this.#writeResponseService.handle(response, httpStatus.OK, headers, html)

      // this.#logService.handle(`Sent a response : ${html}`);
    })

  }

  #listen()
  {
    return this.#server.listen(this.#port);
  }

  #createRequestListener()
  {
    return (request, response) => {
      console.log(request.method)
      console.log(request.headers)
      console.log(request.url)

      this.#logService.handle("Received an incoming request!");

      const headers = {
        "Content-Type": "text/html",
      }

      const html = "<h1>Hello, AppServer!</h1>"

      this.#writeResponseService.handle(response, httpStatus.OK, headers, html)

      this.#logService.handle(`Sent a response : ${html}`);
    }
  }
}

module.exports = AppServer