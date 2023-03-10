import connectToDatabase from '../../../helpers/mongodb';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
	const triggerId = req.query.triggerQVotes;

	const client = await connectToDatabase;
	const db = client.db('Parlay');
	const collection = db.collection('trigger_questions');
	const data = await collection
		.findOne(
			{ _id: new ObjectId(triggerId) },
			{ projection: { upvotes: 1, downvotes: 1 } }
		)

	const voteCounts = {
		upvotes: data.upvotes,
		downvotes: data.downvotes,
	};
		

	res.status(200).json({  voteCounts} );
}

export default handler;
