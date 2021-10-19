const express = require('express');
const auth = require('../middleware/auth')
const commentCtrl = require('../controllers/comment')
const router = express.Router();

// GET // 
router.get('/', commentCtrl.getAllComments)
// router.get('/', auth, commentCtrl.getAllComments)

// GET Comment post // 
router.get('/ofpost/:id', commentCtrl.getCommentsForOnePost)


// POST //
router.post('/', commentCtrl.createComment)
// router.post('/', auth, multer, commentCtrl.createComment)

// DELETE //
router.delete('/:id', commentCtrl.deleteComment)
//router.delete('/:id', auth, commentCtrl.deleteComment)



 
module.exports = router;