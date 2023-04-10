class WriteResponseService {

  handle(response, statusCode, headers = [], content = '')
  {
    response.writeHead(statusCode, headers);

    response.write(content);

    response.end();
  }
}

module.exports = WriteResponseService