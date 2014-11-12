'use strict';

var clusterMaster = require("cluster-master-ext");

clusterMaster({
  exec: "http-worker.js", // script to run
  size: 8, // number of workers
  env: { },
  args: [],
  silent: false,
  signals: true
});
