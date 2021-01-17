const { Post } = require('../models');

const postdata = [
  {
    title: 'Philosophy',
   content: 'What is philosophy? Well it mean "love of wisdom." I like philosophy because it is a search to better understand yourself and others.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
   content: 'lorem ipsum sdfseuhdjgsedngerwsuijgsrensgnijds',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;