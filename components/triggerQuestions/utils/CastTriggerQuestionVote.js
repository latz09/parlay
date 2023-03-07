import { useState } from 'react';
import SignUpForm from '../../login/SignUpForm';
import ModalOverlay from '../../utils/ModalOverlay';

const CastTriggerQuestionVote = ({
	userId,
	triggerId,
	setUpVoteCount,
	setDownVoteCount,
	disabled,
}) => {
	const [x, setX] = useState();
	const [openModal, setOpenModal] = useState(false);
	const handleUpVote = async () => {
		const res = await fetch(`/api/triggerQuestionVotes/upvote`, {
			method: 'POST',
			body: JSON.stringify({
				userId,
				triggerId,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		fetch(`api/triggerQuestionVotes/${triggerId}`)
			.then((res) => res.json())
			.then((data) => {
				setUpVoteCount(data.upvotes.length);
				setDownVoteCount(data.downvotes.length);
			});
	};

	const handleDownVote = async () => {
		const res = await fetch(`/api/triggerQuestionVotes/downvote`, {
			method: 'POST',
			body: JSON.stringify({
				userId,
				triggerId,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		fetch(`api/triggerQuestionVotes/${triggerId}`)
			.then((res) => res.json())
			.then((data) => {
				setUpVoteCount(data.upvotes.length);
				setDownVoteCount(data.downvotes.length);
			});
	};

	return (
		<>
			{disabled ? (
				<div className='flex justify-around [&>*]:btn'>
					<button
						className='w-1/5'
						onClick={() => {
							setOpenModal(true);
						}}
					>
						agree
					</button>
					<button
						className='bg-secondary w-1/5'
						onClick={() => {
							setOpenModal(true);
						}}
					>
						disagree
					</button>
				</div>
			) : (
				<div className='flex justify-around [&>*]:btn'>
					<button className='w-1/5' onClick={handleUpVote}>
						agree
					</button>
					<button className='bg-secondary w-1/5' onClick={handleDownVote}>
						disagree
					</button>
				</div>
			)}

{openModal && (
				<ModalOverlay setModalIsOpen={setOpenModal}>
					<div className="h-full grid place-items-center text-triary font-bold text-center mx-2 lg:mx-0">
                        <div className="h-3/4   w-full lg:w-3/4 bg-dark/95">                          
                            <SignUpForm setOpenModal={setOpenModal} id={userId}/>
                        </div>
                    </div>
				</ModalOverlay>
			)}
		</>
	);
};

export default CastTriggerQuestionVote;
