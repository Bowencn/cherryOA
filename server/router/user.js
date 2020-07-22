const express =require('express')
const user = express.Router()
user.use((req, res, next) => {
    console.log(`路由执行成功啦~~~`, Date.now());
    next()
  })
user.get('/',(req,res)=>{
    res.json({
        code: 200,
        data: {
            message: "success",
            entity: {
                id: 1,
                name: "XXX",
                code: "XXX"
            }
        }
    })
})
user.get('/:id',(req,res)=>{
    res.json({
        code: 200,
        data: {
            message: "success",
            entity: {
                id: 1,
                name: "123",
                code: "123"
            }
        }
    })
})
module.exports = user