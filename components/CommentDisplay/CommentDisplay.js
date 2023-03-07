import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';
import CommentInput, { UserDisplay } from './utils/CommentInput';
import { useState, useEffect } from 'react';

import Comment from './utils/Comment';
import SortComments from './utils/SortComments';

const CommentDisplay = ({ userId, comments, setComments, discussionId }) => {
	
	return (
		<>
			{comments && (
				<div className='h-full flex flex-col justify-between gap-8 lg:w-2/3 mx-auto '>
					<div className=' grid items-center h-ful'>
						<CommentInput
							userId={userId}
							discussionId={discussionId}
							comments={comments}							
							setComments={setComments}
						/>
						
						{/* <SortComments /> */}
					</div>
					<div className=' grid gap-2  overflow-y-scroll scrollbar-hide flex-grow h-full '>
						{comments.map((comment, index) => (
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
			)}
		</>
	);
};

export default CommentDisplay;
