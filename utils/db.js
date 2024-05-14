import MongoClient from 'mongodb';


class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const db = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}/${db}`;

    MongoClient.connect(url, { useUnifiedTopology: true },(err, client) => {
      if (err) {
        throw err;
      }
      this.client = client
      this.isClientConnected = true;
    });
    this.isClientConnected = false;
  }

  async isAlive() {
    return this.isClientConnected;
  }

  async nbUsers() {
    const collection = this.client.db().collection('users');
    return collection.countDocuments();
  }

  async nbFiles() {
    const collection = this.client.db().collection('files');
    return collection.countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;