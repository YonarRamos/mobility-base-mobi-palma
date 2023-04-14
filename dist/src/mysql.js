"use strict";

var _mysql = require('nexo-npm-node-mysql');
var logs_ = require('nexo-npm-node-logger');
_mysql.url('127.0.0.1');
_mysql.credentials('admin', 'admin');
_mysql.schema('mydb');
_mysql.onConnected(function () {
  return logger.i("Connected to mysql database");
});
_mysql.onFailure(function (err) {
  return logger.e("Unable to connect to mysql database", err);
});
_mysql.onC(function (error) {
  return logs_.i('mysql error:', error);
});
_mysql.initialize();
module.exports = _mysql;