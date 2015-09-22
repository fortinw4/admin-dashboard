var express = require('express');
var router = express.Router();
var obj = require('../QiewieAdminData.json');

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index', {
    layout: '', 
    title:'admin-board', 
    data: obj.data, 
    newUsers7Days: obj.newUsers7Days, 
    numTweets: obj.numTweets,
    numLikes: obj.numLikes, 
    loc: obj.data.loc[0],
    premium: obj.premium,
    corporate: obj.corporate,
    municipal: obj.municipal
	});
});


module.exports = router;


