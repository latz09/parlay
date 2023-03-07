import { useState, useEffect } from 'react';
import SectionHeading from '../utils/SectionHeading';
import ModalOverlay from '../utils/ModalOverlay';
import DiscussionDisplay from './utils/DiscussionDisplay';
import NewDiscussionForm from './NewDiscussionForm';

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

	return (
		<div className='grid   w-full h-full max-w-7xl mx-auto '>
			<SectionHeading title='active discussions' />
			{discussions && discussions.length !== 0 ? (
				<DiscussionDisplay discussions={discussions} />
			) : (
				<div className="text-center text-2xl my-8 italic tracking-wider opacity-70 font-tinos">Be the first to get the discussions rolling...</div>
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
			<div className='text-center mt-8 '>
				<button
					className='text-2xl font-tinos font-bold border border-primary/50 text-dark/80 p-4 md:hover:scale-90 md:hover:bg-primary hover:text-light transition duration-700 shadow hover:shadow-2xl'
					onClick={() => setIsNewDiscussionOpen(!isNewDiscussionOpen)}
				>
					Start Your Own Discussion
				</button>
			</div>

			{isNewDiscussionOpen && (
				<ModalOverlay setModalIsOpen={setIsNewDiscussionOpen}>
					<div className='h-full grid place-items-center text-triary font-bold '>
						<div className='h-3/4   w-full lg:w-3/4 bg-dark/95'>
							<NewDiscussionForm
								setIsNewDiscussionOpen={setIsNewDiscussionOpen}
								userId={userId}
								triggerQId={triggerQId}
								category={category}
								discussions={discussions}
								setDiscussions={setDiscussions}
								
							/>
						</div>
					</div>
				</ModalOverlay>
			)}
		</>
	);
};
