import { useState } from 'react';

import {
	BsFillHandThumbsUpFill,
	BsFillHandThumbsDownFill,
} from 'react-icons/bs';
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
				<div className='grid gap-2 xl:flex justify-around [&>*]:btn-vote'>
					<button className='flex items-center space-x-2'
						onClick={() => {
							setOpenModal(true);
						}}
					>
						<span className="opacity-80">agree</span>
						<span>
							<BsFillHandThumbsUpFill />
						</span>
					</button>
					<button className='flex items-center space-x-2'
						onClick={() => {
							setOpenModal(true);
						}}
					>
						<span className="text-primary ">disagree</span>
						<span>
							<BsFillHandThumbsDownFill />
						</span>
					</button>
				</div>
			) : (
				<div className='grid gap-2 xl:flex justify-around [&>*]:btn-vote'>
					<button className='flex items-center space-x-2' onClick={handleUpVote}>
						<span className="opacity-80">agree</span>
						<span className="text-primary">
							<BsFillHandThumbsUpFill />
						</span>
					</button>
					<button className='flex items-center space-x-2' onClick={handleDownVote}>
						<span className="text-primary ">disagree</span>
						<span>
							<BsFillHandThumbsDownFill />
						</span>
					</button>
				</div>
			)}

			{openModal && (
				<ModalOverlay setModalIsOpen={setOpenModal}>
					<div className='h-full grid place-items-center text-triary font-bold text-center mx-2 lg:mx-0'>
						<div className='h-3/4   w-full lg:w-3/4 bg-dark/95'>
							<SignUpForm setOpenModal={setOpenModal} id={userId} />
						</div>
					</div>
				</ModalOverlay>
			)}
		</>
	);
};

export default CastTriggerQuestionVote;
