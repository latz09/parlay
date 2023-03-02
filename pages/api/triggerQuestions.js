import connectToDatabase from '../../helpers/mongodb';

async function handler(req, res) {
	// const { db } = await connectToDatabase();
	const client = await connectToDatabase;
	const db = client.db('Parlay');
	const collection = db.collection('trigger_questions');
	const data = await collection.find().toArray();
	res.status(200).json(data);
}

export default handler;
