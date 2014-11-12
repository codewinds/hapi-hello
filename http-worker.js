'use strict';

var Hapi = require('hapi');

var idx = parseInt(process.env.CLUSTER_IDX || '0', 10);
var port = 3200 + idx;
var server = new Hapi.Server('localhost', port);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply({ hello: 'world' });
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});

function shutdown() {
    server.stop();
}

process
  .on('SIGTERM', shutdown)
  .on('SIGINT', shutdown);