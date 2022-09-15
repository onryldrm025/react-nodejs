const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const sql = require('mssql')
const {sqlConfig} = require('./config')
const appPool = new sql.ConnectionPool(sqlConfig)

const app = express();
const router = express.Router()


app.use(cors())
app.use(express.json());
app.use('/api',router) 

require('./routers/user.router')(router)
app.set('deneme',224);



appPool.connect().then(function(pool) {
    app.locals.db = pool;
    const server = app.listen(3001, function () {
      const host = server.address().address
      const port = server.address().port
      console.log('Example app listening at http://%s:%s', host, port)
    })
  }).catch(function(err) {
    console.error('Error creating connection pool', err)
  });
