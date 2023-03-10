import Spinner from '../../utils/Spinner';
import { motion } from 'framer-motion';
import UserAvatar from '../../users/UserAvatar';
import DateDisplay from '../../utils/DateDisplay';
import VoteDisplayTwo from '../../utils/VoteDisplayTwo';
import Link from 'next/link';

import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import {useState} from 'react'
const DiscussionDisplay = ({ discussions, userId }) => {



	let reversedDiscussions;
	if (discussions) {
		reversedDiscussions = discussions.map((x, i, a) => a[a.length - i - 1]);
	
	}

	
	return (
		<>
			{discussions ? (
				<div className=' snap-y mx-auto snap-mandatory   flex w-full   overflow-y-scroll scrollbar-hide my-2 items-center'>
					{reversedDiscussions.map((discussion) => (
						<div
							key={discussion._id}
							className='snap-center w-3/4 mr-4 lg:mr-8 md:w-1/2 flex-shrink-0 '
						>
							<div className='p-2 mx-auto'>
								<DiscussionCard
									id={discussion._id}
									author={discussion.author}
									topic={discussion.topic}
									upvotes={discussion.upvotes}
									downvotes={discussion.downvotes}
									discussion={discussion.comments}
									description={discussion.description}
									createdAt={discussion.createdAt}
									userId={userId}
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
	userId,
	id,
	description,
	author,
	createdAt,
	upvotes,
	downvotes,
}) => {
	const [upVoteCount, setUpVoteCount] = useState(upvotes.length);
	const [downVoteCount, setDownVoteCount] = useState(downvotes.length);



	return (
		<motion.div
			className='flex flex-col justify-between gap-4 lg:gap-8  h-full w-full tracking-wide  p-4    border-t-4 border-primary '
			initial={{ scale: 0.995 }}
			animate={{
				scale: 1,

				transition: {
					duration: 2,
					repeat: Infinity,
					repeatType: 'mirror',
					ease: 'easeInOut',
				},
			}}
			style={{
				willChange: 'transform',
				backfaceVisibility: 'hidden',
			}}
		>
			<div className='flex flex-col h-full gap-4 '>
				<div className='grid gap-2'>
					<UserAvatar user={author} />
					<DateDisplay date={createdAt} />
					<div className='text-xl lg:text-xl  font-semibold tracking-wider py-2 text-cente font-questrial'>{`${topic}`}</div>
				</div>
				<motion.div
					className=' flex-grow grid  font-questrial  tracking-wider md:text-lg   rounded-md'
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.5 }}
				>
					{description}
				</motion.div>
			</div>
			<div className='flex items-center justify-evenly'>
				<div className='borde w-3/4 '>
					<VoteDisplayTwo
						collection={'discussions'}
						documentId={id}
						userId={userId}
						upVoteCount={upVoteCount}
						downVoteCount={downVoteCount}
						setUpVoteCount={setUpVoteCount}
						setDownVoteCount={setDownVoteCount}
					/>
				</div>
				<div className=''>
					<Link href={`/discussions/${id}`}>
						<div className='flex items-center space-x-2 text-2xl lg:text-3xl font-bold text-triary'>
							<span className="scale-75 text-primary">1</span>
							<span>
								<BsFillChatLeftDotsFill />
							</span>
						</div>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};
