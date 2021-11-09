const sequelize = require('../config/config.js');
const seedUser = require('./userData');
const seedPost = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedAll();