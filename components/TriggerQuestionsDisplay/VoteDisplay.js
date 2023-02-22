import { BsHandThumbsUp, BsHandThumbsDown, BsChatLeft } from 'react-icons/bs';

const VoteDisplay = ({ upvotes, downvotes, discussions }) => {
	return (
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
			<div className='vote-display'>
				<span className='text-2xl'>
					<BsChatLeft />
				</span>
				<span>{discussions}</span>
			</div>
		</div>
	);
};
export default VoteDisplay;
