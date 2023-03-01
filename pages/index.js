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
	// const { data: session } = useSession();
	const [questions, setQuestions] = useState();
	// console.log(JSON.stringify(DummyDiscussionData));
	useEffect(() => {
		setQuestions(triggerQuestions);
	}, [triggerQuestions]);

	// console.log(session);

	return (
		<>
			{!questions ? (
				<p>loading</p>
			) : (
				<div className='grid gap-16  max-w-5xl mx-auto p-4 my-4 lg:my-16 '>
			
					{/* {session ? (
						<div>
							<div>{session.user.email}</div>
							<div onClick={() => signOut()}>logout</div>
						</div>
					): <div>not logged in</div>} */}

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
