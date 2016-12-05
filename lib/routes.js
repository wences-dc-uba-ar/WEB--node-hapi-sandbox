var api = require('./api');

module.exports = [
  {
    method: 'GET',
    path: '/api/contents',
    handler: api.contents.all
  }
];
