const db = require('../models');
const { Post, Comment } = db.sequelize.models;
const fs = require('fs')
const jwt = require('jsonwebtoken');


// Get all posts
exports.getAllPosts = (req, res) => {
    Post.findAll()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

// Get last activity
exports.getLastActivityPost = (req, res) => {
    // Post.find({
    //     order: [['createdAt', 'DESC']],
    //     limit: 3
    // })
    Post.find({ limit: 3 })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};


// Create a post
exports.createPost = (req, res, next) => {
    const postObject = req.body;
    const userId = req.body.userId
    const userName = req.body.userName
    if (req.file) {
        postObject.imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }
    const post = new Post({
        ...postObject,
        userId: userId,
        userName: userName
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Post registered !' }))
        .catch(error => res.status(400).json({ error }));
};


// Delete a post 
exports.deletePost = (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
    })

        .then(Post => {
            Post.destroy({ id: req.params.id })
        })

        .then(() => res.status(200).json({ message: 'post supprimé !' }))
        .catch(error => res.status(400).json({ error }));
}

// Modify a post 
exports.modifyPost = (req, res) => {
    console.log("req.body :" + JSON.stringify(req.body));
    const postObject = req.body;
    Post.findOne({
        where: { id: req.params.id }
    })
        .then(Post => {
            Post.update(postObject)
        })
        .then(() => res.status(200).json({ message: 'post modifié !' }))
        .catch(error => res.status(400).json({ error }));
}






