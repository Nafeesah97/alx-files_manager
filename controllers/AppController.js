const dbClient = require('./utils/db');
const redisClient = require('./utils/redis')

const getStatus = async (req, res) => {
  try {
    const redis = await redisClient.isAlive();
    const db =  await dbClient.isAlive();
    res.status(200).json({ redis, db });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getStats = async (req, res) => {
  try {
    const users = await dbClient.nbUsers();
    const files = await dbClient.nbFiles();
    res.status(200).json({ users, files });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getStatus, getStats };
