import { BsFillChatFill } from 'react-icons/bs';

const JoinDiscussionLink = () => {
	return (
		<div className="grid place-items-center my-2 text-secondary tracking-wider">
			<div className='flex space-x-4 place-items-center text-lg'>
				<span className='font-semibold'>join the discussions</span>
				<span className='text-4xl text-triary'>
					<BsFillChatFill />
				</span>
			</div>
		</div>
	);
};

export default JoinDiscussionLink;
