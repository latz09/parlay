import connectToDatabase from "../../../helpers/mongodb";
//
async function handler(request, response) {
    const userEmail = request.query.userEmail

    const client = await connectToDatabase; 
	const db = client.db('Parlay');
	const collection = db.collection('users');   
    const user = await collection.findOne({email: userEmail}, {projection: {password: 0}})
   

    response.status(200).json(user)
}

export default handler
