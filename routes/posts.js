const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// Get all posts
router.get("/", async (req, res) => {
  //have this to check if request is reaching the route
  console.log("reached get posts route");
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get a specific post
router.get("/:postId", async (req, res) => {
  console.log("reached get post by id route");
  try {
    const specificPost = await Post.find({ _id: req.params.postId });
    res.json(specificPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submit a post
router.post("/", async (req, res) => {
  console.log("reached create post route");
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.send(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a post
router.get("/:postId", async (req, res) => {
  console.log("reached delete post route");
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update post
router.patch("/:postId", async (req, res) => {
  console.log("reached patch post route");
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
