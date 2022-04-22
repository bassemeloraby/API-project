const User = require('../models/user')

module.exports = {
    index:(req,res) =>{
        User.find({})
        .then(users=>{
            res.json(users)
        })
        .catch(error=>{
            res.json({error: error})
        })
    },
    show:(req,res) =>{
        let userId = req.params.uid
        User.findById(userId)
        .then(user =>{
            res.json({user})
        })
        .catch(error =>{
            res.json({error: error})
        })
    }
}
