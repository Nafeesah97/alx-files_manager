import redisClient from '../utils/redis';
import dbClient from '../utils/db';

exports.getStatus = async (req, res) => {
  const redisAlive = await redisClient.isAlive();
  const dbAlive = await dbClient.isAlive(); // Replace with your actual DB health check
  
  res.status(200).json({ redis: redisAlive, db: dbAlive });
};
  
exports.getStats = async (req, res) => {
  const userCount = await dbClient.nbUsers();
  const fileCount = await dbClient.nbFiles();
  
  res.status(200).json({ users: userCount, files: fileCount });
};
