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
import Meta from '../components/utils/Meta';

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
					<Meta
				pageTitle={'PARLAY'}
				description={
					'THE SPOTIFY OF DEBATE. Parlay is a platform that allows you to debate with others on any topic.'
				}
				keywords={'parlay, debate, spotify, music, politics, sports, religion, science, philosophy, technology, entertainment,'}
			/>
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
