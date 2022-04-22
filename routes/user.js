
const router = require('express').Router(),
UserController = require('../controllers/user')

router.get('/',UserController.index)
router.get('/:uid',UserController.show)

module.exports = router