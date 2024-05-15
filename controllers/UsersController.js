/* eslint-disable import/no-named-as-default */
const sha1 = require('sha1');
import Queue from 'bull/lib/queue';
import dbClient from '../utils/db';

const userQueue = new Queue('email sending');

const UsersController = {
  postNew: async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Missing email" });
    }
    if (!password) {
      return res.status(400).json({ error: "Missing password" });
    }
    const user = await(await dbClient.usersCollection()).findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Already exists" });
    }
    const insertionInfo = await (await dbClient.usersCollection())
    .insertOne({ email, password: sha1(password) });
    const userId = insertionInfo.insertedId.toString();

    userQueue.add({ userId });
    return res.status(201).json({ email, id: userId });
  }
}