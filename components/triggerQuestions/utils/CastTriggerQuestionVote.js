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
	collection,
	setUpVoteCount,
	setDownVoteCount,
	disabled,
	documentId
}) => {
	const [error, setError] = useState(null);
	const [openModal, setOpenModal] = useState(false);

	const handleUpVote = async () => {
		const res = await fetch(`/api/votes`, {
			method: 'POST',
			body: JSON.stringify({
				userId,
				collection,
				documentId,
				voteType: 'upvote',
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		async function fetchVotes() {
			try {
				const res = await fetch(
					`/api/votes?collection=${collection}&documentId=${documentId}`
				);
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const data = await res.json();
				setUpVoteCount(data);
			} catch (err) {
				setError(err.message);
			}
		}

		fetchVotes();
	};
	const handleDownVote = async () => {
		const res = await fetch(`/api/votes`, {
			method: 'POST',
			body: JSON.stringify({
				userId,
				collection,
				documentId,
				voteType: 'downvote',
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		async function fetchVotes() {
			try {
				const res = await fetch(
					`/api/votes?collection=${collection}&documentId=${documentId}`
				);
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const data = await res.json();
				setDownVoteCount(data);
			} catch (err) {
				setError(err.message);
			}
		}

		fetchVotes();
	};

	return (
		<>
			{disabled ? (
				<div className='grid gap-2 place-items-center xl:flex justify-around [&>*]:btn-vote'>
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
				<div className='grid gap-2 place-items-center xl:flex justify-around [&>*]:btn-vote'>
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
