"use strict";

const App = require('./App')
const Main = require('./Main')
const AppExpress = require('./AppExpress')

// const port = 3010,
//     http = require("http"),
//     httpStatus = require("http-status-codes"),
//     app = http.createServer((request, response) => {
//         console.log("Received an incoming request!");
//         response.writeHead(httpStatus.OK, {
//             "Content-Type": "text/html"
//         });
//
//         let responseMessage = "<h1>Hello, Universe!</h1>";
//         response.write(responseMessage);
//         response.end();
//         console.log(`Sent a response : ${responseMessage}`);
//     });

// const t = app.listen(port);
// console.log(t.address())
// console.log(`The server has started and is listening on port number: ${port}`);

const port = 3010
const appHttp = new App(port)
const appExpress = new AppExpress(port)

const main = new Main(appExpress)
const t = main.init()
console.log(t)
