import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../helpers/auth';
import connectToDatabase from '../../../helpers/mongodb';

export default NextAuth({
	session: {
		jwt: true,
	},

	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				const client = await connectToDatabase;
				const db = client.db('Parlay');
				const usersCollection = await db.collection('users');

				const user = await usersCollection.findOne({
					email: credentials.email,
				});

				if (!user) {
					throw new Error('No user with that email found!');
				}

				const isValid = await verifyPassword(
					credentials.password,
					user.password
				);

				if (!isValid) {
					throw new Error('Correct email / Wrong Password');
				}

				const result = { email: user.email};

				// client.close();

				return result;
			},
		}),
		
	],
	

	secret: process.env.SECRET,
});
