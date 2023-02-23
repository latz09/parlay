import { ObjectId } from "mongodb";
import connectToDatabase from "../../../../helpers/mongodb"

// <DiscussionsByTriggerQuestionId />
async function handler(request, response) {
    const id = request.query.triggerQuestionId

    const client = await connectToDatabase; 
	const db = client.db('Parlay');
	const discussionsCollection = db.collection('discussions');   
    const discussion = await discussionsCollection.find({triggerQuestionID: new ObjectId(id)}).toArray()
   

    response.status(200).json(discussion)
}

export default handler
