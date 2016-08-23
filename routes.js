var express = require('express');

var router=express.Router();

//router.get('/',usersGet);
router.get('/fruit/:fruitname',function (req,res){
	res.send('crispe');
};

module.exports=router;