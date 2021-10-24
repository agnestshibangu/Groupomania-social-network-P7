const db = require('../models');
const { Comment, Post } = db.sequelize.models;
const fs = require('fs')
const jwt = require('jsonwebtoken');



// Get all posts
exports.getAllComments = (req, res) => {
    Comment.findAll()
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(400).json({ error }));
};

// Create a comment
exports.createComment = (req, res, next) => {
    const CommentObject = req.body
    console.log(req.params)
    console.log(req.params.postId)
    const postId = req.params.postId
    const comment = new Comment({
        ...CommentObject,  
        postId: postId
    });
    comment.save()
        .then(() => res.status(201).json({ message: 'Comment registered !' }))
        .catch(error => res.status(400).json({ error }));
};


// Delete a comment 
exports.deleteComment  = (req, res) => {
    Comment.findOne({
        where: { id: req.params.id
                 }
    })
        .then( Comment => {
            Comment.destroy({ id: req.params.id })
        })
        .then(() => res.status(200).json({ message: ' Comment supprimé !' }))
        .catch(error => res.status(400).json({ error }));
}

///// Cette fonction ne marche pas !!!!
// Delete all comments for a post
exports.deleteAllComments = (req, res) => {
Comment.findAll({
    where: { postId: req.params.id
    }
    })
    .then(Comment => {
        Comment.destroy({ postId: req.params.id })
        })   
    .then(() => res.status(200).json({ message: ' tout les commentaire pour ce post on été supprimé !' }))
    .catch(error => res.status(400).json({ error }));
}



// Get All comments for one post
exports.getCommentsForOnePost = (req, res, next) => {      
    Comment.findAll({
        where: { postId: req.params.id },
        })
        .then(
            function(comment) { res.status(200).json(comment) },
            function(error) { res.status(404).json({ error }) }
        );  
};

// Delete all comments for one post
exports.deleteCommentsForOnePost = (req, res, next) => {      
    Comment.findAll({
        where: { postId: req.params.id },
        })
        .then(Comment.destroy({ postId: req.params.id }))
        .then(() => res.status(200).json({ message: ' tout les commentaires de ce post ont été supprimés !' }))
        .catch(error => res.status(400).json({ error }));
     
};


