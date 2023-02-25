import { FaUserAlt } from 'react-icons/fa';


const CommentInput = ({userId}) => {
	return (
		<div className='gap-4  lg:flex items-center lg:space-x-4'>
			<UserDisplay userId={userId}/>
			<div className='lg:flex-grow my-2'>
				<input
					type='text'
					className='px-2 py-4  w-4/5  lg:w-1/2'
					placeholder='Tell us what you think...'
				/>
			</div>
		</div>
	);
};

export default CommentInput;

export const UserDisplay = ({ userId }) => {
	return (
		<div className='flex space-x-2 items-center '>
			<span className=" p-2 rounded-full ">
                <FaUserAlt className='text-xl text-primary' />
            </span>
			<div>{userId}</div>
		</div>
	);
};
