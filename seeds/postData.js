const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "What in the WORLD is C#?!",
    "postContent": "I have continued to wander what this is for a while, can you answer??",
    "userId": 1
  },
  {
    "postTitle": "JAVASCRIPT",
    "postContent": "I will not lie, I like javascript.",
    "userId": 2
  },
  {
    "postTitle": "How many errors?",
    "postContent": "Way too many!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;