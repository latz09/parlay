import LoginModal from '../components/login/LoginModal';
import TriggerQuestionDisplay from '../components/triggerQuestions/TriggerQuestionDisplay';
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

import {
	DummyTriggerQuestions,
	DummyDiscussionData,
	UserData,
} from '../data/DUMMY_DATA';

import connectToDatabase from '../helpers/mongodb';

export default function Home({ triggerQuestions }) {
	
	const { data: session } = useSession();
	const [userId, setUserId] = useState();
	const [questions, setQuestions] = useState();

	useEffect(() => {
		setQuestions(triggerQuestions);
		if (session) {
			fetch(`/api/users/${session.user.email}`)
				.then((res) => res.json())
				.then((data) => {
					setUserId(data._id);
				});
		}
		// fetch user by email and set user
	}, [triggerQuestions, session]);

	return (
		<>
			{!questions ? (
				<p>loading...</p>
			) : (
				<div className='grid gap-24  max-w-7xl mx-auto p-4 my-8 lg:my-24 '>
					{questions.map((question) => (
						<div key={question._id}>
							<TriggerQuestionDisplay
								id={question._id}
								category={question.category}
								question={question.question}
								upvotes={question.upvotes}
								downvotes={question.downvotes}
								discussions={question.discussions}
								relatedArticles={question.relatedArticles}
								userId={userId ? userId : ''}
								// CHECK IF THIS FIXES IT...I HAVENT PUSHED TO REPOSITORY YET
							/>
						</div>
					))}
				</div>
			)}
		</>
	);
}

export async function getStaticProps() {
	const client = await connectToDatabase;
	const db = client.db('Parlay');
	const triggerQuestionsCollection = await db.collection('trigger_questions');
	const data = await triggerQuestionsCollection.find().toArray();

	return {
		props: { triggerQuestions: JSON.parse(JSON.stringify(data)) },
	};
}

// HOW DO I PASS THE
