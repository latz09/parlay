import connectToDatabase from '../helpers/mongodb';
import TriggerQuestionStats from '../components/triggerQuestions/TriggerQuestionStats';
import DiscussionsByTriggerQuestionId from '../components/discussions/DiscussionsByTriggerQuestionId';
import MinimumArticle from '../components/articleDisplays/MinimumArticle';
import Spinner from '../components/utils/Spinner';

import DiscussionsByCategory from '../components/discussions/DiscussionsByCategory';

import { ObjectId } from 'mongodb';
import StartDiscussion from '../components/utils/StartDiscussion';

const TriggerQuestionPage = ({ discussions, id }) => {

	
	

	return (
		<>
			<div className='flex flex-col lg:p-4  gap-4 my-8 mx-2'>
				<TriggerQuestionStats
					category={discussions.category}
					question={discussions.question}
					upvotes={discussions.upvotes}
					downvotes={discussions.downvotes}
					discussions={
						discussions.discussions ? discussions.discussions.length : 0
					}
				/>
				<StartDiscussion id={id} />
				<DiscussionsByTriggerQuestionId id={discussions._id} />
				<MinimumArticle articles={discussions.relatedArticles} />
				<DiscussionsByCategory category='sports' />
				<DiscussionsByCategory category='entertainment' />
			</div>
		</>
	);
};

export default TriggerQuestionPage;

export async function getServerSideProps({ params, req, res }) {
	const { triggerQuestionId } = params;

	const client = await connectToDatabase;
	const db = client.db('Parlay');
	const triggerQuestionsCollection = db.collection('trigger_questions');
	const data = await triggerQuestionsCollection.findOne({
		_id: new ObjectId(triggerQuestionId),
	});

	return {
		props: { discussions: JSON.parse(JSON.stringify(data)), id: triggerQuestionId },
	};
}
