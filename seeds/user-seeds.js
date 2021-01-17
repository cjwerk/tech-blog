const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Chris',
    password: 'password123'
  },
  {
  username: 'Joe',
  password: 'joe'
}
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;