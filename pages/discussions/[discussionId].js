import connectToDatabase from '../../helpers/mongodb';
import { ObjectId } from 'mongodb';
import { TriggerQuestion } from '../../components/triggerQuestions/TriggerQuestionDisplay';
import VoteDisplay from '../../components/utils/VoteDisplay';
import CommentDisplay from '../../components/CommentDisplay/CommentDisplay';
import DiscussionsByCategory from '../../components/discussions/DiscussionsByCategory';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import TriggerQuestionsPreview from '../../components/triggerQuestions/TriggerQuestionPreview';
import { Avatar } from '../../components/users/UserAvatar';

const DiscussionById = ({ discussion, id }) => {
	const { upvotes, downvotes, topic, comments, category } = discussion;
	const { data: session } = useSession();
	const [user, setUser] = useState();

	//if session fetch user data
	useEffect(() => {
		if (session) {
			fetch(`/api/users/${session.user.email}`)
				.then((res) => res.json())
				.then((data) => {
					setUser(data);
				});
		}
	}, [session]);

	return (
		<>
			{user && (
				<div className='grid gap-2  max-w-7xl mx-auto px-4 '>
					<div className=' lg:my-0 lg:h-[15vh] grid gap-4 my-4 items-center'>
						<DiscussionTopic topic={topic} />
						<VoteDisplay
							upvotes={upvotes}
							downvotes={downvotes}
							discussions={comments}
							disabled={true}
						/>
					</div>
					<div className='h-[75vh] '>
						<Avatar displayName={user.displayName} email={user.email} />
						<CommentDisplay comments={comments} userId={user._id} />
					</div>
					<DiscussionsByCategory category={'entertainment'} />
					<TriggerQuestionsPreview />
					<DiscussionsByCategory category={'sports'} />
				</div>
			)}
		</>
	);
};

export default DiscussionById;

export async function getServerSideProps({ params, req, res }) {
	const { discussionId } = params;

	// const discussionId = '63f56ffb3fcb69c17deb52a6'

	const client = await connectToDatabase;
	const db = client.db('Parlay');
	const collection = db.collection('discussions');
	const data = await collection.findOne({ _id: new ObjectId(discussionId) });

	return {
		props: { discussion: JSON.parse(JSON.stringify(data)), id: discussionId },
	};
}

const DiscussionTopic = ({ topic }) => {
	return (
		<div className='text-center text-3xl self-end lg:text-primary/70 tracking-wider'>
			<span>{topic}</span>
		</div>
	);
};
