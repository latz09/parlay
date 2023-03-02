

import { ObjectId } from "mongodb";

import connectToDatabase from "../../../helpers/mongodb";
async function Handler(req, res) {
	if (req.method !== 'POST') {
		return;
	}

	const data = req.body;

	const { userId, topic, description, triggerQId, category } = data;

	// if (!userId || !topic || !description || !triggerQId) {
	// 	res.status(422).json({ message: 'Invalid input.' });
	// 	return;

	// }

	const client = await connectToDatabase;

	const db = client.db('Parlay');
	const convertedUserId = new ObjectId(userId);
	const convertedTriggerQId = new ObjectId(triggerQId);

	const result = await db.collection('discussions').insertOne({
		author: convertedUserId,
		topic: topic,
		description: description,
		category: category,
		upvotes: [],
		downvotes: [],
		comments: [],
		triggerQuestionID: convertedTriggerQId,
		createdAt: new Date(),

	});



	
	res.status(201).json({ message: 'Discussion Created!!!', description });
}

export default Handler;