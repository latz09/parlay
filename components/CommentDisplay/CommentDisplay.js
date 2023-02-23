import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';
import CommentInput, { UserDisplay } from './utils/CommentInput';

import Comment from './utils/Comment';
import SortComments from './utils/SortComments';

const CommentDisplay = ({ comments }) => {
	console.log(comments);
	return (
		<div className='h-full flex flex-col justify-between gap-8 lg:w-2/3 mx-auto'>
			<div className=' grid items-center h-ful'>
				<CommentInput userId='John Doe'/>
                <SortComments />
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
	);
};

export default CommentDisplay;




