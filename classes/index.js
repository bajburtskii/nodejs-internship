"use strict";

const Main = require("./Main")
const AppServer = require("./AppServer")
const ExpressAppServer = require("./ExpressAppServer")
const LogService = require("./LogService")
const WriteResponseService = require("./WriteResponseService")

const logService = new LogService()
const writeResponseService = new WriteResponseService()

const server = new AppServer(logService, writeResponseService, 3010)
// const server2 = new ExpressAppServer(logService, writeResponseService, 3010)

const main = new Main(server)
main.run()

// console.log(server.address())

// console.log(`The server has started and is listening on port number: ${port}`);