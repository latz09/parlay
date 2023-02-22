import { BsFillChatFill } from 'react-icons/bs';

const JoinDiscussionLink = () => {
	return (
		<div className="grid place-items-center my-8 ">
			<div className='flex space-x-4 place-items-center text-lg'>
				<span className='font-bold'>join the discussions</span>
				<span className='text-4xl'>
					<BsFillChatFill />
				</span>
			</div>
		</div>
	);
};

export default JoinDiscussionLink;
