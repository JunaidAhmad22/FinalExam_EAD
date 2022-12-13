const exprees = require('express')
var router = exprees.Router();

router.get('/',(req,res)=>{
    res.json('Hello World');
})

module.exports=router;