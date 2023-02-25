import VoteDisplay from '../../utils/VoteDisplay';
import Spinner from '../../utils/Spinner';
import { motion } from 'framer-motion';
import { UserDisplay } from '../../CommentDisplay/utils/CommentInput';

const DiscussionDisplay = ({ discussions }) => {
	return (
		<>
			{discussions ? (
				<div className=' snap-y mx-auto snap-mandatory   flex w-full   overflow-y-scroll scrollbar-hide my-2 '>
					{/* <div className="text-center mt-8">all discussions</div> */}
					{discussions.map((discussion) => (
						<div
							// initial={{ opacity: 0, scale: .7 }}
							// whileInView={{ opacity: 1, scale: 1 }}
							// transition={{ duration: 1, delay: .2 }}
							key={discussion._id}
							className='snap-center w-3/4 xl:w-1/3    flex-shrink-0  flex px-4 py-2  mx-4 rounded-lg     shadow-lg  bg-[#005386]'
						>
							<div className='p-2  mx-auto '>
								<DiscussionCard
									id={discussion._id}
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

export const DiscussionCard = ({
	topic,
	upvotes,
	downvotes,
	discussion,
	id,
}) => {
	return (
		<div className='flex flex-col justify-between gap-4 lg:gap-8 '>
			<span className='text-xl lg:text-3xl text-primary'>{topic}</span>
			<CommentPreview comments={discussion} />
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

const CommentPreview = ({ comments }) => {
	return (
		<div className='grid gap-2 lg:mx-4 text-light font-semibold tracking-wider'>
			<UserDisplay userId={comments[0].userId} />
			<span className='mx-4'>{comments[0].comment}</span>
		</div>
	);
};
