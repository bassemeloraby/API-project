
const router = require('express').Router(),
UserController = require('../controllers/user')

router.get('/',UserController.index)

module.exports = router