import VoteDisplay from '../../utils/VoteDisplay';
import Spinner from '../../utils/Spinner';
import { motion } from 'framer-motion';
import { UserDisplay } from '../../CommentDisplay/utils/CommentInput';
import UserAvatar from '../../users/UserAvatar';
import DateDisplay from '../../utils/DateDisplay';

const DiscussionDisplay = ({ discussions }) => {
	
	let reversedDiscussions;
	if (discussions) {
		reversedDiscussions = discussions.map((x, i, a) => a[a.length - i - 1]);
	}


	return (
		<>
			{discussions ? (
				<div className=' snap-y mx-auto snap-mandatory   flex w-full   overflow-y-scroll scrollbar-hide my-2 '>
					{/* <div className="text-center mt-8">all discussions</div> */}
					{reversedDiscussions.map((discussion) => (
						<motion.div
							key={discussion._id}
							className='snap-center w-3/4 xl:w-1/3    flex-shrink-0  flex px-4 py-2  mx-4 rounded-sm     shadow-lg  '
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1.1 }}
						>
							<div className='p-2  mx-auto '>
								<DiscussionCard
									id={discussion._id}
									author={discussion.author}
									topic={discussion.topic}
									upvotes={discussion.upvotes}
									downvotes={discussion.downvotes}
									discussion={discussion.comments}
									description={discussion.description}
									createdAt={discussion.createdAt}
								/>
							</div>
						</motion.div>
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
	description,
	author,
	createdAt,
}) => {
	return (
		<div className='flex flex-col justify-between gap-4 lg:gap-8  h-full w-full tracking-wide'>
			<div className='flex flex-col h-full gap-4'>
				<div className='grid gap-2'>
					<UserAvatar user={author} />
					<DateDisplay date={createdAt} />
					<span className='text-xl lg:text-2xl font-semibol tracking-wider py-2 text-center font-tinos'>{`" ${topic} "`}</span>
				</div>
				<motion.div
					className=' flex-grow grid place-items-center font-semibold opacity-90 '
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.5 }}
				>
					{description}
				</motion.div>
			</div>
			<motion.div
				className='w-full'
				initial={{ scale: 1, scale: 0.97 }}
				whileInView={{ scale: 1, scale: 1 }}
				transition={{
					repeat: Infinity,
					duration: 1.5,
					repeatType: 'mirror',
					ease: 'easeInOut',
				}}
			>
				<VoteDisplay
					upvotes={upvotes}
					downvotes={downvotes}
					discussions={discussion}
					topic={topic}
					discussionId={id}
				/>
			</motion.div>
		</div>
	);
};
