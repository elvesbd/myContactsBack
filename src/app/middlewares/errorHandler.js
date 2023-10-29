module.exports = (error, _request, response, _next) => {
  console.log('errorHandler: ' + error.message);
  response.sendStatus(500);
};
