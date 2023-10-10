const express = require('express');
const router = express.Router();
const {createPersonalInfo,getPersonalInfo}= require('../controllers/personalinfoController');


router.post('/create',createPersonalInfo);

module.exports=router;
