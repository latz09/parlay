import { useState, useEffect } from 'react';
import SectionHeading from '../utils/SectionHeading';
import ModalOverlay from '../utils/ModalOverlay';
import DiscussionDisplay from './utils/DiscussionDisplay';
import NewDiscussionForm from './NewDiscussionForm';
import { motion } from 'framer-motion';
import Spinner from '../utils/Spinner';

const DiscussionsByTriggerQuestionId = ({
	triggerQId,
	sessionUserId,
	category,
}) => {
	//go through all of discussions that have a triggerquestionId that matches the current trigger question
	const [discussions, setDiscussions] = useState([]);
	const [isNewDiscussionOpen, setIsNewDiscussionOpen] = useState(false);

	useEffect(() => {
		fetch(`/api/discussions/byTriggerQuestion/${triggerQId}`)
			.then((res) => res.json())
			.then((data) => {
				setDiscussions(data);
			});
	}, [triggerQId]);

	if (!discussions) {
		return (
			<div className=' h-[45vh] grid place-items-center'>
				<Spinner />
			</div>
		);
	}

	return (
		<div className='grid   w-full h-full max-w-7xl mx-auto '>
			<SectionHeading title='active discussions' />
			{discussions && discussions.length !== 0 ? (
				<DiscussionDisplay
					discussions={discussions}
					userId={sessionUserId}
				/>
			) : (
				<div className='text-center text-2xl my-8 italic tracking-wider opacity-70 font-tinos'>
					Be the first to get the discussions rolling...
				</div>
			)}

			<StartOwnDiscussion
				isNewDiscussionOpen={isNewDiscussionOpen}
				setIsNewDiscussionOpen={setIsNewDiscussionOpen}
				userId={sessionUserId}
				triggerQId={triggerQId}
				category={category}
				discussions={discussions}
				setDiscussions={setDiscussions}
			/>
		</div>
	);
};

export default DiscussionsByTriggerQuestionId;

const StartOwnDiscussion = ({
	isNewDiscussionOpen,
	setIsNewDiscussionOpen,
	userId,
	triggerQId,
	category,
	discussions,
	setDiscussions,
}) => {
	return (
		<>
			<motion.div
				className='text-center mt-8 antialiased'
				animate={{
					x: [-3, 3, -3, 0],
					// color: ['#f00', '#f00', '#f00', '#fff'],
					scale: [1, 1.1, 1, 1],
					transition: {
						duration: 1,
						repeat: Infinity,
						repeatType: 'loop',
						ease: 'easeInOut',
						repeatDelay: 3,
					},
				}}
			>
				<motion.button
					className='text-2xl font-tinos font-bold  text-dark/80 p-4 md:hover:scale-90  transition duration-700 '
					onClick={() => setIsNewDiscussionOpen(!isNewDiscussionOpen)}
				>
					Start Your Own Discussion
				</motion.button>
			</motion.div>

			{isNewDiscussionOpen && (
				<ModalOverlay setModalIsOpen={setIsNewDiscussionOpen}>
					<NewDiscussionForm
						setIsNewDiscussionOpen={setIsNewDiscussionOpen}
						userId={userId}
						triggerQId={triggerQId}
						category={category}
						discussions={discussions}
						setDiscussions={setDiscussions}
					/>
				</ModalOverlay>
			)}
		</>
	);
};
