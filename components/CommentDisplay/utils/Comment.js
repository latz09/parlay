import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';
import { UserDisplay } from './CommentInput';

const Comment = ({ comment, userId, upvotes, downvotes }) => {
	return (
		<div className=' grid'>
			<span className='text-lg lg:text-xl font-semibold text-primary'>
				<UserDisplay userId={userId} />
			</span>
			<span className='text-base lg:text-lg  text-dark/80 tracking-wider  '>
				{comment}
			</span>
			<div className=' place-self-end'>
				<CommentVotes upvotes={upvotes} downvotes={downvotes} />
			</div>
		</div>
	);
};

export default Comment;

const CommentVotes = ({ upvotes, downvotes }) => {
	return (
		<div className='flex space-x-8 '>
			<div className='vote-display text-primary'>
				<span className='text-2xl text-triary'>
					<BsHandThumbsUp />
				</span>
				<span>{upvotes}</span>
			</div>
			<div className='vote-display text-triary'>
				<span className='text-2xl text-primary'>
					<BsHandThumbsDown />
				</span>
				<span>{downvotes}</span>
			</div>
		</div>
	);
};
