

const express = require('express')
const router = express.Router();
const path = require('path');
const errorControllers = require('../controllers/error')

const rootDir = require('../utils/helper');

router.use(errorControllers.getError) 
module.exports = router;