import { BsHandThumbsUp, BsHandThumbsDown, BsChatLeft } from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';

const VoteDisplay = ({
	upvotes,
	downvotes,
	discussions,
	topic,
	disabled,
	discussionId,
}) => {
	const [upvote, setUpvote] = useState(upvotes);
	const [downvote, setDownVote] = useState(downvotes);

	const handleUpVote = () => {
		setUpvote(upvote + 1);
	};
	const handleDownVote = () => {
		setDownVote(downvote + 1);
	};

	const handleClick = () => {
		console.log(discussionId);
	};

	return (
		<>
			<div className='flex justify-around '>
				<div className='vote-display' onClick={handleUpVote}>
					<span className='text-2xl'>
						<BsHandThumbsUp />
					</span>
					<span>{upvote}</span>
				</div>
				<div className='vote-display' onClick={handleDownVote}>
					<span className='text-2xl'>
						<BsHandThumbsDown />
					</span>
					<span>{downvote}</span>
				</div>
				<Link href={`/discussions/${discussionId}`}>
					<div className='vote-display '>
						<span className='text-2xl'>
							<BsChatLeft />
						</span>
						<span>{discussions ? discussions.length : 0}</span>
					</div>
				</Link>
			</div>
		</>
	);
};
export default VoteDisplay;
