const express = require('express');
const router = express.Router();

// middleware


// controllers
const {createPost,getPost,updatePost,deletePost} = require('../controllers/drive');
const { authenticationMiddleware, isAdminMiddleware } = require('../middleware/auth');


// routes
router.get('/',authenticationMiddleware,getPost)
router.post('/post',authenticationMiddleware,isAdminMiddleware,createPost)
router.put('/update-post/:postID',authenticationMiddleware,isAdminMiddleware,updatePost)
router.delete('/delete-post/:postID',authenticationMiddleware,isAdminMiddleware,deletePost)
// router.post('/login',login)
// router.post('/register-user',authenticationMiddleware,isAdminMiddleware,registerUser)


module.exports = router