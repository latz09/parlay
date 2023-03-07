import connectToDatabase from '../../../helpers/mongodb';
import { ObjectId } from 'mongodb';
async function handler(req, res) {
	if (req.method === 'POST') {
		const { userId, triggerId} = req.body;

		const client = await connectToDatabase;
		const db = client.db('Parlay');
		const collection = db.collection('trigger_questions');
		const data = await collection.updateOne(
			{ _id: new ObjectId(triggerId) },            
			{ $addToSet: { upvotes: new ObjectId(userId) } }
		);

		res.status(200).json({ message: 'success', data: data });
	}
}

export default handler;
