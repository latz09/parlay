import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

console.log('no error');

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let connectToDatabase;

if (process.env.NODE_ENV === 'development') {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect();
	}
	connectToDatabase = global._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(uri, options);
	connectToDatabase = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default connectToDatabase;


export async function insertDocument(client, collection, document) {
	const db = client.db();
	const result = await db.collection(collection).insertOne(document);

	return result;
}
