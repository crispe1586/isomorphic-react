var express = require('express');
var FruitDetail = require('./source/components/FruitDetail.react');

var router=express.Router();

router.get('/',function (req,res){
	res.render('index', { title : 'Pokédex-React' });
});
router.get('/fruit/:fruitname',function (req,res){
	res.render(FruitDetail);
});

module.exports=router;