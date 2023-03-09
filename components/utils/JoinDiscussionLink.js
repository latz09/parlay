import { BsChatLeftDots } from 'react-icons/bs';
import { motion } from 'framer-motion';

const JoinDiscussionLink = () => {
	return (
		<div className='grid place-items-center my-2  tracking-wider'>
			<motion.div className='flex space-x-4 items-center  text-lg'>
		
				<span className='text-xl lg:text-3xl font-oswald uppercase mt-4 font-semibold opacity-80 '>
					join the discussions
				</span>
				<motion.div
					className='text-2xl lg:text-3xl text-primary'
					initial={{ scale: 0.9, opacity: 0.7 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						duration: 1.3,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				>
					<BsChatLeftDots />
				</motion.div>{' '}
			</motion.div>
		</div>
	);
};

export default JoinDiscussionLink;
