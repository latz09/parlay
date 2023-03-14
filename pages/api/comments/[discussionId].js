import connectToDatabase from '../../../helpers/mongodb';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const {
			discussionId,
			comment,
			authorId,
			authorName,
			createdAt,
			upvotes,
			downvotes,
		} = req.body;

		const client = await connectToDatabase;
		const db = client.db('Parlay');
		const commentsCollection = db.collection('comments');

		const result = await commentsCollection.insertOne({
			discussionId: new ObjectId(discussionId),
			comment: comment,
			authorId: new ObjectId(authorId),
			authorName: authorName,
			createdAt: createdAt,
			upvotes: upvotes,
			downvotes: downvotes,
		});

		res.status(201).json({ message: 'Comment added!' });
	}

	if (req.method === 'GET') {
		const { discussionId } = req.query;

		const client = await connectToDatabase;
		const db = client.db('Parlay');
		const commentsCollection = db.collection('comments');

		const comments = await commentsCollection
		.find({ discussionId: new ObjectId(discussionId) })
		.sort({ createdAt: -1 }) // Sort comments by creation date in descending order
		.toArray();

		res.status(200).json({ comments: comments });
	}
}

export default handler;
