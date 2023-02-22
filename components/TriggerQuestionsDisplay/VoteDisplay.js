import { BsHandThumbsUp, BsHandThumbsDown, BsChatLeft } from 'react-icons/bs';
import { useState } from 'react';
import ModalOverlay from '../utils/ModalOverlay';
import CommentDisplay from '../CommentDisplay/CommentDisplay';

const VoteDisplay = ({ upvotes, downvotes, discussions, topic, disabled }) => {
	const [commentsOpen, setCommentsOpen] = useState(false);
	const handleClick = () => {
		disabled ? null : setCommentsOpen(true);
	};

	return (
		<>
			<div className='flex justify-around '>
				<div className='vote-display'>
					<span className='text-2xl'>
						<BsHandThumbsUp />
					</span>
					<span>{upvotes}</span>
				</div>
				<div className='vote-display'>
					<span className='text-2xl'>
						<BsHandThumbsDown />
					</span>
					<span>{downvotes}</span>
				</div>
				<div
					className='vote-display '
					onClick={handleClick}
				>
					<span className='text-2xl'>
						<BsChatLeft />
					</span>
					<span>{discussions ? discussions.length : 0}</span>
				</div>
			</div>
			{commentsOpen && (
				<ModalOverlay setModalIsOpen={setCommentsOpen} topic={topic}>
					<CommentDisplay discussion={discussions} topic={topic} />
				</ModalOverlay>
			)}
		</>
	);
};
export default VoteDisplay;
