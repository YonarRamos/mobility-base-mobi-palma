const _mysql =  require('nexo-npm-node-mysql')
const logs_ =  require('nexo-npm-node-logger')

_mysql.url('127.0.0.1')
_mysql.credentials('admin', 'admin')
_mysql.schema('mydb')
_mysql.onConnected(() => logger.i("Connected to mysql database"))
_mysql.onFailure((err:any) => logger.e("Unable to connect to mysql database", err))
_mysql.onC((error)=> logs_.i('mysql error:', error))
_mysql.initialize()


module.exports = _mysql
