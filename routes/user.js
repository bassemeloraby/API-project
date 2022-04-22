
const router = require('express').Router(),
UserController = require('../controllers/user')

router.get('/',UserController.index)
router.get('/:uid',UserController.show)
router.put('/:uid/update',UserController.updat)

module.exports = router