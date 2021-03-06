
const router = require('express').Router(),
UserController = require('../controllers/user')

router.get('/',UserController.index)
router.get('/:uid',UserController.show)
router.put('/:uid/update',UserController.updat)
router.delete('/:uid/delete',UserController.delete)
router.post('/create',UserController.create)
router.post('/login',UserController.authenticate)
module.exports = router