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
               
				<div className=' snap-x mx-auto snap-mandatory  flex w-full   overflow-scroll scrollbar-hide my-2 '>
                     {/* <div className="text-center mt-8">all discussions</div> */}
					{discussions.map((discussion) => (
						<div key={discussion._id} className="snap-start w-1/2 xl:w-1/3    flex-shrink-0  flex px-4 py-2  mx-4 border shadow-lg">
							<div className='p-2  mx-auto'>
								<DiscussionCard
									topic={discussion.topic}
									upvotes={discussion.upvotes}
									downvotes={discussion.downvotes}
									discussion={discussion.comments}
								/>
							</div>
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
	return (
		<div className='flex flex-col justify-between gap-4 lg:gap-8 '>
			<span className='text-xl lg:text-3xl'>{topic}</span>
			<CommentPreview comments={discussion} />
			<VoteDisplay
				upvotes={upvotes}
				downvotes={downvotes}
				discussions={discussion.length}
			/>
		</div>
	);
};

const CommentPreview = ({ comments }) => {
	console.log(comments);

	return (
		<div className='grid gap-2 lg:mx-4'>
			<span className='text-xl font-semibold'>user{comments[0].userId}</span>
			<span className="mx-4">{comments[0].comment}</span>
		</div>
	);
};
