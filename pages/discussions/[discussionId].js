import connectToDatabase from '../../helpers/mongodb';
import { ObjectId } from 'mongodb';

import CommentDisplay from '../../components/CommentDisplay/CommentDisplay';
import DiscussionsByCategory from '../../components/discussions/DiscussionsByCategory';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import TriggerQuestionsPreview from '../../components/triggerQuestions/TriggerQuestionPreview';

import VoteDisplayTwo from '../../components/utils/VoteDisplayTwo';

const DiscussionById = ({ discussion, discussionId, commentData }) => {
	const { topic, description } = discussion;
	const { data: session } = useSession();
	const [user, setUser] = useState();
	const [discussionComments, setDiscussionComments] = useState([]);
	const [upVoteCount, setUpVoteCount] = useState(discussion.upvotes.length);
	const [downVoteCount, setDownVoteCount] = useState(
		discussion.downvotes.length
	);
	

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
		setDiscussionComments(commentData);
	}, [commentData]);

	return (
		<>
			{user && (
				<div className='grid gap-2  max-w-7xl mx-auto px-4 mb-16 '>
					<div className=' lg:my-0 grid gap-4 my-4 items-center'>
						<DiscussionTopic topic={topic} description={description} />
						<VoteDisplayTwo
							collection={'discussions'}
							documentId={discussionId}
							userId={user._id}
							upVoteCount={upVoteCount}
							downVoteCount={downVoteCount}
							setUpVoteCount={setUpVoteCount}
							setDownVoteCount={setDownVoteCount}
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
					<TriggerQuestionsPreview userId={user ? user._id : null} />
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
    .sort({ createdAt: -1 }) // Sort comments by creation date in descending order
    .toArray();

	return {
		props: {
			discussion: JSON.parse(JSON.stringify(discussionData)),
			discussionId: discussionId,
			commentData: JSON.parse(JSON.stringify(commentData)),
		},
	};
}

const DiscussionTopic = ({ topic, description }) => {
	return (
		<div className='text-center grid gap-4 font-oswald tracking-wider  '>
			<span className="text-xl lg:text-4xl  font-oswald font scale-y-125 font-semibold  opacity-80">{topic}</span>
			<span className="text lg:text-2xl font-thin ">{description}</span>
		</div>
	);
};
