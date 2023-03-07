import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';
import CommentInput, { UserDisplay } from './utils/CommentInput';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Comment from './utils/Comment';
import SortComments from './utils/SortComments';
import { Avatar } from '../users/UserAvatar';

const CommentDisplay = ({
	userId,
	discussionId,
	setComments,
	comments,
	displayName,
	email,
}) => {
	

	return (
		<div className='mb-12 '>
			<Avatar displayName={displayName} email={email} />
			<CommentInput
				userId={userId}
				discussionId={discussionId}
				displayName={displayName}
				setComments={setComments}

			/>
			{comments.length === 0 && <p className="text-center my-4 italic opacity-70">No comments yet</p>}

			<div className='grid gap-8 my-4 max-w-3xl mx-auto'>
				{comments.length > 0 &&
					comments.map((comment, index) => (
						<div key={index} className='grid gap-2'>
							<motion.div 
								initial={{ opacity: 0}}
								whileInView={{ opacity: 1}}
								transition={{ delay: 0.2, duration: 1 }}

							>
							<UserDisplay userId={comment.authorName} />
							</motion.div>
							<div className='grid gap-8 border-b pb-8 border-primary/50'>
								<motion.div className='ml-4 flex-grow'
									initial={{ opacity: 0, scale: .7 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.2, duration: 1, type: 'spring', stiffness: 100 }}

								>
									{comment.comment}
								</motion.div>
								<div className="flex space-x-4">
									<span>like</span>
									<span>dislike</span>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default CommentDisplay;
