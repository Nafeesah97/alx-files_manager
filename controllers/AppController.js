import { redisClient, dbClient } from '../utils';

const AppController = {
  getStatus: (req, res) => {
    const redisStatus = redisClient.isAlive();
    const dbStatus = dbClient.isAlive();
    res.status(200).json({ redis: redisStatus, db: dbStatus });
  },
  getStats: (req, res) => {
    // Assuming you have functions to get the count of users and files from the database
    const usersCount = dbClient.nbUsers();
    const filesCount = dbClient.nbFiles();
    res.status(200).json({ users: usersCount, files: filesCount });
  }
};

export default AppController;
