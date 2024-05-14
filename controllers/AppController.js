const dbClient = require('../utils/db');
const redisClient = require('../utils/redis')

export default class AppController {
  static getStatus = (req, res) => {
    const redis = redisClient.isAlive();
    const db =  dbClient.isAlive();
    res.status(200).json({ redis: redis, db: db });
  }

  static getStats = (req, res) => {
    Promise.all([dbClient.nbUsers(), dbClient.nbFiles()])
      .then(([usersCount, filesCount]) => {
        res.status(200).json({ users: usersCount, files: filesCount });
    });
  }
};

module.exports = { getStatus, getStats };
