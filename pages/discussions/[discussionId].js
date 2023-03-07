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

const DiscussionById = ({ discussion, discussionId, comments }) => {
	const { upvotes, downvotes, topic, category } = discussion;
	const { data: session } = useSession();
	const [user, setUser] = useState();
	const [discussionComments, setDiscussionComments] = useState([]);

	//if session fetch user data
	useEffect(() => {
		if (session) {
			fetch(`/api/users/${session.user.email}`)
				.then((res) => res.json())
				.then((data) => {
					setUser(data);
				});
		} else {
			window.location.href = '/';
		}
	}, [session]);

	useEffect(() => {
		setDiscussionComments(comments);
	}, [comments]);

	

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

					<CommentDisplay
						userId={user._id}
						discussionId={discussionId}
						comments={discussionComments}
						setComments={setDiscussionComments}
						displayName={user.displayName}
						email={user.email}
					/>

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

	const client = await connectToDatabase;
	const db = client.db('Parlay');
	const discussionCollection = db.collection('discussions');
	const discussionData = await discussionCollection.findOne({
		_id: new ObjectId(discussionId),
	});

	const commentsCollection = db.collection('comments');
	const commentData = await commentsCollection
		.find({ discussionId: new ObjectId(discussionId) })
		.toArray();

	return {
		props: {
			discussion: JSON.parse(JSON.stringify(discussionData)),
			discussionId: discussionId,
			comments: JSON.parse(JSON.stringify(commentData)),
		},
	};
}

const DiscussionTopic = ({ topic }) => {
	return (
		<div className='text-center font-oswald mt-2 text-3xl self-end  tracking-wider'>
			<span>{topic}</span>
		</div>
	);
};
