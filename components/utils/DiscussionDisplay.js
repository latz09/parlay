import VoteDisplay from '../TriggerQuestionsDisplay/VoteDisplay';
import Spinner from './Spinner';
import { useState } from 'react';
import ModalOverlay from './ModalOverlay';
import CommentDisplay from '../CommentDisplay/CommentDisplay';

const DiscussionDisplay = ({ discussions }) => {


	
	console.log(discussions);
	return (
		<>
			{discussions ? (
				<div className=' snap-x mx-auto snap-mandatory   flex w-full   overflow-scroll scrollbar-hide my-2 '>
					{/* <div className="text-center mt-8">all discussions</div> */}
					{discussions.map((discussion) => (
						<div
							key={discussion._id}
							className='snap-start w-3/4 xl:w-1/3    flex-shrink-0  flex px-4 py-2  mx-4 border border-triary/50 border-r-triary/20 shadow-lg rounded-md'
						>
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

export default DiscussionDisplay;

export const DiscussionCard = ({ topic, upvotes, downvotes, discussion }) => {
	return (
		<div className='flex flex-col justify-between gap-4 lg:gap-8 '>
			<span className='text-xl lg:text-3xl text-primary'>{topic}</span>
			<CommentPreview comments={discussion} />
			<VoteDisplay
				upvotes={upvotes}
				downvotes={downvotes}
				discussions={discussion}
				topic={topic}
			/>
		</div>
	);
};

const CommentPreview = ({ comments }) => {
	return (
		<div className='grid gap-2 lg:mx-4 '>
			<span className='text-xl font-bold text-triary tracking-wider'>
				user{comments[0].userId}
			</span>
			<span className='mx-4'>{comments[0].comment}</span>
		</div>
	);
};
