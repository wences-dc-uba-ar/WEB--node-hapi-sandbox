
var models = require('../models');

exports.contents = {
  all: function(request, reply) {
    models.Content.findAll()
      .then(function(contents) {
        reply(contents).code(200);
      });
  }
};
