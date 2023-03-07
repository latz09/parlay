import { ObjectId } from "mongodb";
import connectToDatabase from "../../../../helpers/mongodb"

//dynamic api route
// **can do if req.method === 'DELETE' etc etc so can make dynamic delete api routes


async function handler(request, response) {

 

    const triggerId = request.query.triggerQuestionId

    const client = await connectToDatabase; 
	const db = client.db('Parlay');
	const triggerQuestionsCollection = db.collection('trigger_questions');   
    const triggerQuestion = await triggerQuestionsCollection.findOne({_id: new ObjectId(triggerId)})

    response.status(200).json(triggerQuestion)
}

export default handler
