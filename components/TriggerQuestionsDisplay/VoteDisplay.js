import { BsHandThumbsUp, BsHandThumbsDown, BsChatLeft } from 'react-icons/bs';

const VoteDisplay = ({ upvotes, downvotes, discussions }) => {
	return (
		<div className='flex justify-around '>
			<div  className="vote-display">
				<span>
					<BsHandThumbsUp />
				</span>
				<span>{upvotes}</span>
			</div>
			<div className="vote-display">
				<span>
					<BsHandThumbsDown />
				</span>
				<span>{downvotes}</span>
			</div>
			<div className="vote-display">
				<span>
					<BsChatLeft />
				</span>
				<span>{discussions}</span>
			</div>
		</div>
	);
};
export default VoteDisplay;
