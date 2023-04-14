const _mysql =  require('nexo-npm-node-mysql')
const logs_ =  require('nexo-npm-node-logger')

_mysql.url('127.0.0.1')
_mysql.credentials('admin', 'admin')
_mysql.schema('mydb')
_mysql.onConnected(() => logger.i("Connected to mysql database"))
_mysql.onFailure((error:any) => logger.e("Unable to connect to mysql database", error))
_mysql.initialize()

module.exports = _mysql
