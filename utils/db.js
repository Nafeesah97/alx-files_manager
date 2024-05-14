import { MongoClient } from 'mongodb'; // Import MongoClient from 'mongodb'

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const db = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}/${db}`;

    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.client.connect(); // Connect to MongoDB server
  }

  async isAlive() {
    return this.client.isConnected(); // Check if client is connected
  }

  async nbUsers() {
    const collection = this.client.db().collection('users');
    return collection.countDocuments(); // Get count of documents in 'users' collection
  }

  async nbFiles() {
    const collection = this.client.db().collection('files');
    return collection.countDocuments(); // Get count of documents in 'files' collection
  }
}

const dbClient = new DBClient();
export default dbClient;
