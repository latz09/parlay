import { BsHandThumbsUp, BsHandThumbsDown, BsChatLeft } from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const VoteDisplay = ({
	upvotes,
	downvotes,
	discussions,
	topic,
	disabled,
	discussionId,
}) => {
	const handleUpVote = () => {};
	const handleDownVote = () => {};

	const handleClick = () => {
		console.log(discussionId);
	};


	return (
		<>
			<div className='flex justify-around  '>
				<div className='vote-display' onClick={handleUpVote}>
					<span className='text-3xl'>
						<BsHandThumbsUp />
					</span>
					<span>{upvotes}</span>
				</div>
				<div className='vote-display' onClick={handleDownVote}>
					<span className='text-3xl'>
						<BsHandThumbsDown />
					</span>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1.1 }}
						transition={{ duration: 1 }}
					>
						{downvotes}
					</motion.div>
				</div>
				{!disabled && (
					<div>
						<Link href={`/discussions/${discussionId}`}>
							<ChatBox discussions={discussions} />
						</Link>
					</div>
				)}
			</div>
		</>
	);
};
export default VoteDisplay;

const ChatBox = ({ discussions }) => {
	return (
		<div className='vote-display '>
			<span className='text-3xl'>
				<BsChatLeft />
			</span>
			<span>{discussions ? discussions.length : 0}</span>
		</div>
	);
};
