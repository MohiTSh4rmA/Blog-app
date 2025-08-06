const router = require('express').Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

module.exports = router;
