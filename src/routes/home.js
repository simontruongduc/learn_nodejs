const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');

router.use('/home/:id',homeController.show)
router.use('/home',homeController.index)
router.use('/',homeController.index)

module.exports = router;