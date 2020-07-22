const express =require('express')
const login = express.Router()
login.use((req, res, next) => {
    console.log(`路由执行成功啦~~~`, Date.now());
    next()
  })
login.post('/',(req,res)=>{
    console.log(req.body)
    // res.json({
    //     code: 200,
    //     data: {
    //         message: "success",
    //         entity: {
    //             id: 1,
    //             name: "XXX",
    //             code: "XXX"
    //         }
    //     }
    // })
})
// login.get('/:id',(req,res)=>{
//     res.json({
//         code: 200,
//         data: {
//             message: "success",
//             entity: {
//                 id: 1,
//                 name: "123",
//                 code: "123"
//             }
//         }
//     })
// })
module.exports = login