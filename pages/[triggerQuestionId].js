import connectToDatabase from '../helpers/mongodb';
import TriggerQuestionStats from '../components/triggerQuestions/TriggerQuestionStats';
import DiscussionsByTriggerQuestionId from '../components/discussions/DiscussionsByTriggerQuestionId';
import MinimumArticle from '../components/articleDisplays/MinimumArticle';
import Spinner from '../components/utils/Spinner';

import DiscussionsByCategory from '../components/discussions/DiscussionsByCategory';
import { useSession } from 'next-auth/react';
import { ObjectId } from 'mongodb';
import { useEffect, useState } from 'react';
import TriggerQuestionPreview from '../components/triggerQuestions/TriggerQuestionPreview';
import RelatedArticlesDisplay from '../components/articleDisplays/FullArticle';

const TriggerQuestionPage = ({ discussions }) => {
	const [user, setUser] = useState();
	const [sessionFound, setSessionFound] = useState(false);
	const [upVoteCount, setUpVoteCount] = useState(discussions.upvotes.length);
	const [downVoteCount, setDownVoteCount] = useState(
		discussions.downvotes.length
	);
	const { data: session } = useSession();

	useEffect(() => {
		if (session) {
			fetch(`/api/users/${session.user.email}`)
				.then((res) => res.json())
				.then((data) => {
					setUser(data);
					setSessionFound(true);
				});
		} else {
			window.location.href = '/';
		}
	}, [session]);

	if (!sessionFound) {
	}

	return (
		<>
			<div className='grid  lg:p-4  gap-4 my-8 mx-2 '>
				<TriggerQuestionStats
					category={discussions.category}
					question={discussions.question}
					upvotes={upVoteCount}
					downvotes={downVoteCount}
					discussions={
						discussions.discussions ? discussions.discussions.length : 0
					}
					setUpVoteCount={setUpVoteCount}
					setDownVoteCount={setDownVoteCount}
				/>
				<div className='grid gap-24 mb-32'>
					<DiscussionsByTriggerQuestionId
						triggerQId={discussions._id}
						sessionUserId={user ? user._id : null}
						category={discussions.category}
					/>

					<RelatedArticlesDisplay articles={discussions.relatedArticles} />

					<DiscussionsByCategory category='entertainment' />
					<TriggerQuestionPreview />
					<DiscussionsByCategory category='sports' />
				</div>
			</div>
		</>
	);
};

export default TriggerQuestionPage;

export async function getServerSideProps({ params, req, res }) {
	const { triggerQuestionId } = params;
	//triggerQuestion Data
	const client = await connectToDatabase;
	const db = client.db('Parlay');
	const triggerQuestionsCollection = db.collection('trigger_questions');
	const data = await triggerQuestionsCollection.findOne({
		_id: new ObjectId(triggerQuestionId),
	});

	//session user data

	return {
		props: {
			discussions: JSON.parse(JSON.stringify(data)),
			id: triggerQuestionId,
		},
	};
}
