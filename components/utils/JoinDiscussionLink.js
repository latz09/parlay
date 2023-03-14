import { BsFillChatLeftDotsFill, BsChatLeftDotsFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const JoinDiscussionLink = () => {
	return (
		<div className='grid place-items-center my-2  tracking-wider'>
			<motion.div
				className='grid place-items-center gap-2  text-lg'
				initial={{ scale: 0.98, opacity: 0.9 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{
					duration: 1.3,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			>
				<span className='text-xl lg:text-3xl font-oswald uppercase mt-4 font-semibold border-b pb-1 border-primary '>
					join the discussions
				</span>
			</motion.div>
		</div>
	);
};

export default JoinDiscussionLink;
