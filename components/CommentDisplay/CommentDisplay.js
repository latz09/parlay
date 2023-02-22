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
			<span className='text-xl lg:text-2xl font-semibold text-primary'>user {userId}</span>
			<span className='text-lg lg:text-xl font-semibold tracking-wider text-light/70 '>
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
		<div className=' w-full p-2   lg:flex justify-between gap-4'>
			<div className=' flex-grow '>
				<input
					type='text'
					placeholder='Add a comment'
					className='w-full h-full px-4 py-2 bg-triary/10 focus'
				/>
			</div>
			<div className="text-center mt-4">
				<button className='btn bg-primary'>Send it</button>
			</div>
		</div>
	);
};

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
