const { User } = require('../models');

const userdata =
[
  {
    "username": "Cam",
    "password": "password"
  },
  {
    "username": "AlisonsAccount",
    "password": "password"
  },
  {
    "username": "helluvacoder123",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;