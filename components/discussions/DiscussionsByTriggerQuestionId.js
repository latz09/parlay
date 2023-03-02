import { useState, useEffect } from 'react';
import SectionHeading from '../utils/SectionHeading';
import ModalOverlay from '../utils/ModalOverlay';
import DiscussionDisplay from './utils/DiscussionDisplay';
import NewDiscussionForm from './NewDiscussionForm';

const DiscussionsByTriggerQuestionId = ({ triggerQId, sessionUserId, category }) => {
	
	//go through all of discussions that have a triggerquestionId that matches the current trigger question
	const [discussions, setDiscussions] = useState();
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
			<DiscussionDisplay discussions={discussions} />
			<StartOwnDiscussion
				isNewDiscussionOpen={isNewDiscussionOpen}
				setIsNewDiscussionOpen={setIsNewDiscussionOpen}
				userId={sessionUserId}
				triggerQId={triggerQId}
				category={category}
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
	category
}) => {
	
	return (
		<>
			<div className='text-center mt-8 '>
				<button
					className='btn'
					onClick={() => setIsNewDiscussionOpen(!isNewDiscussionOpen)}
				>
					Start Your Own Discussion
				</button>
			</div>

			{isNewDiscussionOpen && (
				<ModalOverlay setModalIsOpen={setIsNewDiscussionOpen}>
					<div className='h-full grid place-items-center text-triary font-bold '>
						<div className='h-3/4  w-3/4 bg-dark/90 rounded'>
							<NewDiscussionForm
								setIsNewDiscussionOpen={setIsNewDiscussionOpen}
								userId={userId}
								triggerQId= {triggerQId}
								category={category}
							/>
						</div>
					</div>
				</ModalOverlay>
			)}
		</>
	);
};
