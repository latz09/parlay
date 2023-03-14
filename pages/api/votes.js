import connectToDatabase from '../../helpers/mongodb';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
    if (req.method === "GET") {
      const { collection, documentId } = req.query;
      const client = await connectToDatabase;
      const db = client.db("Parlay");
      const passedInCollection = db.collection(collection.toString());
      const data = await passedInCollection.findOne(
        { _id: new ObjectId(documentId) },
        { projection: { upvotes: 1, downvotes: 1 } }
      );
  
      const voteCounts = {
        upvotes: data.upvotes.length,
        downvotes: data.downvotes.length,
      };
  
      res.status(200).json(voteCounts);
    }
  
    if (req.method === "POST") {
      const { userId, collection, documentId, voteType } = req.body;
      // console.log(userId)
  
      const client = await connectToDatabase;
      const db = client.db("Parlay");
      const passedInCollection = db.collection(collection.toString());
  
      const updateObj = {};
  
      if (voteType === "upvote") {
        const isAlreadyUpvoted = await passedInCollection.findOne({
          _id: new ObjectId(documentId),
          upvotes: new ObjectId(userId),
        });
  
        if (isAlreadyUpvoted) {
          updateObj.$pull = { upvotes: new ObjectId(userId) };
        } else {
          updateObj.$addToSet = { upvotes: new ObjectId(userId) };
          updateObj.$pull = { downvotes: new ObjectId(userId) };
        }
      } else {
        const isAlreadyDownvoted = await passedInCollection.findOne({
          _id: new ObjectId(documentId),
          downvotes: new ObjectId(userId),
        });
  
        if (isAlreadyDownvoted) {
          updateObj.$pull = { downvotes: new ObjectId(userId) };
        } else {
          updateObj.$addToSet = { downvotes: new ObjectId(userId) };
          updateObj.$pull = { upvotes: new ObjectId(userId) };
        }
      }
  
      const data = await passedInCollection.updateOne(
        {
          _id: new ObjectId(documentId),
        },
        updateObj
      );
  
      res
        .status(200)
        .json({ message: `successful ${voteType}`, data: data });
    }
  }
  
  export default handler;
