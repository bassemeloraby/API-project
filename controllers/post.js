const Post = require('../models/post')

module.exports = {
    index:(req,res) =>{
        Post.find({})
        .then(posts=>{
            res.json({posts})
        })
        .catch(error=>{
            res.json({error: error})
        })
    },
    show:(req,res) =>{
        let postId = req.params.pid
        Post.findById(postId)
        .then(post =>{
            res.json({post})
        })
        .catch(error =>{
            res.json({error: error})
        })
    },
    updat:(req,res) =>{
        let postId = req.params.pid
        let postInfo = {
            title: req.body.title,
            text: req.body.text,
            email: req.body.userId
        }
        Post.findByIdAndUpdate(userId,{$set: userInfo})
        .then(()=>{
            res.json({message:"Post information has updated"})
        })
        .catch(error =>{
            res.json({error: error})
        })
    },
    delete: (req,res) =>{
        let postId = req.params.pid
        Post.findByIdAndRemove(userId)
        .then( ()=>{
            res.json({message:"Post is deleted"})
        })
        .catch(error =>{
            res.json({error: error})
        })
    },
    create: (req,res) =>{
        let post = new Post({
            title: req.body.title,
            text: req.body.text,
            userId: req.body.userId
        })
        post.save((error)=>{
            if(error) 
            res.json({error: error})
            else
            res.json({message:"post inserted"})
        })
    }
}
