import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';

const CommentDisplay = ({ discussion }) => {
	console.log(discussion);
	return (
		<div className='h-[85vh] flex flex-col gap-8 justify-between '>
			<div className='grid  h-full place-items-start  overflow-y-scroll scrollbar-hide rounded-lg '>
				<div className='grid gap-8 p-8 '>
					{discussion.map((comment, index) => (
						<div key={index}>
							<Comment
								comment={comment.comment}
								userId={comment.userId}
								upvotes={comment.upvotes}
								downvotes={comment.downvotes}
							/>
						</div>
					))}
				</div>
			</div>
			<CreateComment />
		</div>
	);
};

export default CommentDisplay;

const Comment = ({ comment, userId, upvotes, downvotes }) => {
	return (
		<div className=' grid'>
			<span className='text-2xl font-semibold'>user {userId}</span>
			<span className='text-xl font-semibold/90 tracking-wider text-dark/80  '>
				{comment}
			</span>
			<div className=" place-self-end">
				<CommentVotes upvotes={upvotes} downvotes={downvotes} />
			</div>
		</div>
	);
};

const CreateComment = () => {
	return (
		<div className=' w-full p-2 flex justify-between gap-4'>
			<div className=' flex-grow '>
				<input
					type='text'
					placeholder='Add a comment'
					className='w-full h-full px-4 py-2 bg-triary/10 focus'
				/>
			</div>
			<div>
				<button className='btn bg-triary'>Send it</button>
			</div>
		</div>
	);
};

const CommentVotes = ({ upvotes, downvotes }) => {
	return (
		<div className='flex space-x-8 '>
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
		</div>
	);
};
