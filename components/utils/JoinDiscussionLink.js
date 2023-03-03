import { BsFillChatFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const JoinDiscussionLink = () => {
	return (
		<div className="grid place-items-center my-2  tracking-wider">
			<motion.div className='flex space-x-4 place-items-center text-lg'
				
			>
				<span className='font-semibold'>join the discussions</span>
				<motion.div className='text-4xl text-secondary'
					initial={{scale: .9, opacity: .7}}
					whileInView={{scale: 1, opacity: 1}}
					transition={{duration: 1.3, repeat: Infinity, repeatType: 'reverse'}}
				>
					<BsFillChatFill />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default JoinDiscussionLink;
