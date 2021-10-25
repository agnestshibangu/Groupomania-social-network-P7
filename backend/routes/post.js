const express = require('express');
const multer = require('../middleware/multer-config')
const auth = require('../middleware/auth')
const postCtrl = require('../controllers/post')
const commentCtrl = require('../controllers/comment')
const router = express.Router();

// GET // 
router.get('/', auth, postCtrl.getAllPosts)

// GET all comments for one post //
router.get('/:id', auth, postCtrl.getAllPosts)

// GET last two posts
router.get('/lastactivitypost', auth, postCtrl.getLastActivityPost)

// POST //
router.post('/', auth, multer, postCtrl.createPost)
// router.post('/', auth, multer, postCtrl.createPost)

// DELETE //
router.delete('/:id', auth, commentCtrl.deleteAllComments, postCtrl.deletePost)
//router.delete('/:id', auth, commentCtrl.deleteAllComments, postCtrl.deletePost)

// UPDATE //
router.put('/:id', auth, postCtrl.modifyPost)


 
module.exports = router;