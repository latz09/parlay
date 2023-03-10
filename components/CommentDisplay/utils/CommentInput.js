import { FaUserAlt } from 'react-icons/fa';

import { useRef } from 'react';

const CommentInput = ({ userId, discussionId, displayName, setComments }) => {
	const commentInputRef = useRef();

	async function handleSubmit(e) {
		e.preventDefault();
		const comment = commentInputRef.current.value;

		const newComment = {
			authorId: userId,
			authorName: displayName,
			discussionId: discussionId,
			comment: comment,
			createdAt: new Date().toISOString(),
			upvotes: [],
			downvotes: [],
		};

		const response = await fetch('/api/comments/' + discussionId, {
			method: 'POST',
			body: JSON.stringify(newComment),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();
		
		fetch('/api/comments/' + discussionId) 
			.then((res) => res.json())
			.then((data) => {
				setComments(data.comments);
			});



		commentInputRef.current.value = '';



	
	}

	return (
		<div className='gap-4  lg:flex items-center lg:space-x-4'>
			<form onSubmit={handleSubmit} className='lg:flex-grow my-2'>
				<input
					type='text'
					ref={commentInputRef}
					className='px-2 py-4  w-4/5  lg:w-1/2'
					placeholder='Tell us what you think...'
				/>
				<button
					type='submit'
					className='bg-dark  text-light mx-4 px-2 py-4 font-tinos font-bold text-lg'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default CommentInput;

















export const UserDisplay = ({ userId }) => {
	return (
		<div className='flex space-x-2 items-center '>
			<span className=' p-2 rounded-full '>
				<FaUserAlt className='text-xl text-primary' />
			</span>
			<div>{userId}</div>
		</div>
	);
};
