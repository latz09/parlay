import connectToDatabase from '../../../../helpers/mongodb';
import { ObjectId } from 'mongodb';

async function handler(request, response) {
	const userId = request.query.id;

	const client = await connectToDatabase;
	const db = client.db('Parlay');
	const collection = db.collection('users');
	const user = await collection.findOne(
		{ _id: new ObjectId(userId) }, 
        { projection: { password: 0 } }
	);

	response.status(200).json(user);
}

export default handler;
