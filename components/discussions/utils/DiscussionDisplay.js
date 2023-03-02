import VoteDisplay from '../../utils/VoteDisplay';
import Spinner from '../../utils/Spinner';
import { motion } from 'framer-motion';
import { UserDisplay } from '../../CommentDisplay/utils/CommentInput';

const DiscussionDisplay = ({ discussions }) => {
	console.log(discussions)
	return (
		<>
			{discussions ? (
				<div className=' snap-y mx-auto snap-mandatory   flex w-full   overflow-y-scroll scrollbar-hide my-2 '>
					{/* <div className="text-center mt-8">all discussions</div> */}
					{discussions.map((discussion) => (
						<div
						
							key={discussion._id}
							className='snap-center w-3/4 xl:w-1/3    flex-shrink-0  flex px-4 py-2  mx-4 rounded-sm     shadow-lg  border'
						>
							<div className='p-2  mx-auto '>
								<DiscussionCard
									id={discussion._id}
									topic={discussion.topic}
									upvotes={discussion.upvotes}
									downvotes={discussion.downvotes}
									discussion={discussion.comments}
									description={discussion.description}
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

export const DiscussionCard = ({
	topic,
	upvotes,
	downvotes,
	discussion,
	id,
	description
}) => {
	return (
		<div className='flex flex-col justify-between gap-4 lg:gap-8 '>
			<span className='text-xl lg:text-3xl text-primary'>{topic}</span>
<span>{description}</span>
			
			<VoteDisplay
				upvotes={upvotes}
				downvotes={downvotes}
				discussions={discussion}
				topic={topic}
				discussionId={id}
			/>
		</div>
	);
};

