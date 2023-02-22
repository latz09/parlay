import TriggerQuestionDisplay from '../components/TriggerQuestionsDisplay/TriggerQuestionDisplay';
import { DummyTriggerQuestions, DummyDiscussionData } from '../data/DUMMY_DATA';
import connectToDatabase from '../helpers/mongodb';

export default function Home({ triggerQuestions }) {
	return (
		<div className='grid gap-24  max-w-5xl mx-auto p-4'>
			{triggerQuestions.map((question) => (
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
	);
}


export async function getStaticProps() {
	const client = await connectToDatabase; 
	const db = client.db('Parlay');
	const triggerQuestionsCollection = db.collection('trigger_questions');
	const data = await triggerQuestionsCollection.find().toArray();

	return {
		props: { triggerQuestions: JSON.parse(JSON.stringify(data)) },
	};
}
