module.exports = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', 'x-app-id');
  response.setHeader('Access-Control-Max-Age', '10'); // cache da requisição preflight
  next();
}