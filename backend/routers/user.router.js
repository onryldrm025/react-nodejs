
const router = require('express').Router()
const sql = require('mssql')

module.exports = (app)=>{
    app.use('/auth',router)

    router.get('/user',(req,res)=>{
        const {id} = req.params
        // req.app.locals.db.query(`EXEC sp_get_user @id=${id} `, function(err, data) {
        //     if (err) {
        //       console.error(err)
        //       res.status(500).send('SERVER ERROR')
        //       return
        //     }
        //     res.status(200).json({ message: 'success' ,data:data.recordset[0]})
        //   })
        const request = req.app.locals.db.request()
        // request.input('id',sql.Int,id)
        request.execute('sp_get_user',function(err, data) {
            if (err) {
              console.error(err)
              res.status(500).send('SERVER ERROR')
              return
            }
            res.status(200).json({ error:false,data:data.recordset})
          })
    })
    router.post('/add/user',(req,res)=>{
        const {name,email,yas} = req.body
        const request = req.app.locals.db.request()
        request.input('name',sql.NVarChar(sql.MAX),name)
        request.input('email',sql.NVarChar(sql.MAX),email)
        request.input('yas',sql.Int,yas)
        request.execute('sp_set_user',function(err, data) {
            if (err) {
              console.error(err)
              res.status(500).send('SERVER ERROR')
              return
            }
            res.status(200).json({ error:false,data:data.recordset})
          })
    })


}