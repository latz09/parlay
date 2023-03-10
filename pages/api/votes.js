import connectToDatabase from '../../helpers/mongodb';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'GET') {
		const { collection, documentId } = req.query;
		const client = await connectToDatabase;
		const db = client.db('Parlay');
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

	if (req.method === 'POST') {
		const { userId, collection, documentId, voteType } = req.body;

		const client = await connectToDatabase;
		const db = client.db('Parlay');
		const passedInCollection = db.collection(collection.toString());

		if (voteType === 'upvote') {
			const data = await passedInCollection.updateOne(
				{
					_id: new ObjectId(documentId),
				},
				{ $addToSet: { upvotes: new ObjectId(userId) } }
			);
			res.status(200).json({ message: 'successful upvote', data: data });
		} else {
			const data = await passedInCollection.updateOne(
				{
					_id: new ObjectId(documentId),
				},
				{ $addToSet: { downvotes: new ObjectId(userId) } }
			);
			res.status(200).json({ message: 'successful downvote', data: data });
		}
	}
}

export default handler;
