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
    },
    updat:(req,res) =>{
        let userId = req.params.uid
        let userInfo = {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
        User.findByIdAndUpdate(userId,{$set: userInfo})
        .then(user=>{
            res.json({message:"user information has updated"})
        })
        .catch(error =>{
            res.json({error: error})
        })
    },
    delete: (req,res) =>{
        let userId = req.params.uid
        User.findByIdAndRemove(userId)
        .then( ()=>{
            res.json({message:"user is deleted"})
        })
        .catch(error =>{
            res.json({error: error})
        })
    },
    create:(req,res)=>{
        let newUser = new User ({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        })
        User.register(newUser, req.body.password,(error,user)=>{
            if(user){
                res.json({message: "User inserted"})
            } else {
                res.json({error :error })
            }
        })
    }
}
