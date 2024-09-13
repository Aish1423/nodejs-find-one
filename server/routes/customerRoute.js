const router = require('express').Router()
const categoryController = require('../api/category/categoryController')



 // ==========================category===============================
 router.post()
 // ==========================category===============================


router.all("**", (req, res)=>{
    res.send({
        success:false,
        status:404,
        message:"invalid address"
    })
})


module.exports = router