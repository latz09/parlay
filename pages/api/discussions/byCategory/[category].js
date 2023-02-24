// =======DYNAMIC API FOR DISCUSSION CATEGORY PAGE======= //

import connectToDatabase from "../../../../helpers/mongodb";

async function handler(request, response) {
    const category = request.query.category;

    const client = await connectToDatabase; 
    const db = client.db('Parlay');
    const discussionsCollection = db.collection('discussions');   
    const discussion = await discussionsCollection.find({category: category}).toArray()
 
    response.status(200).json(discussion)
}

export default handler