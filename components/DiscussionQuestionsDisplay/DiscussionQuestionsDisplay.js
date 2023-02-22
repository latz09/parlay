import { useState, useEffect } from 'react';
import VoteDisplay from '../TriggerQuestionsDisplay/VoteDisplay';
import Spinner from '../utils/Spinner';

const DiscussionQuestionsDisplay = ({ triggerQuestionId }) => {
	//go through all of discussions that have a triggerquestionId that matches the current trigger question
	const [discussions, setDiscussions] = useState();

	console.log(discussions);

	useEffect(() => {
		fetch(`/api/discussions/${triggerQuestionId}`)
			.then((res) => res.json())
			.then((data) => {
				setDiscussions(data);
			});
	}, [triggerQuestionId]);

	return (
		<>
			{discussions ? (
				<div className='border h-full grid place-items-center'>
					{discussions.map((discussion) => (
						<div key={discussion._id} className='p-2 '>
							<DiscussionCard
								topic={discussion.topic}
								upvotes={discussion.upvotes}
								downvotes={discussion.downvotes}
								discussion={discussion.comments}
							/>
						</div>
					))}{' '}
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default DiscussionQuestionsDisplay;

const DiscussionCard = ({ topic, upvotes, downvotes, discussion }) => {
	console.log(discussion.length);
	return (
		<div className="flex flex-col justify-between gap-24">
			<h1>{topic}</h1>
			<VoteDisplay
				upvotes={upvotes}
				downvotes={downvotes}
				discussions={discussion.length}
			/>
		</div>
	);
};
