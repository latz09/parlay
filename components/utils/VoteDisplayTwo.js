import { useState, useEffect } from 'react';
import { BsFillHandThumbsUpFill, BsHandThumbsDownFill } from 'react-icons/bs';

const VoteDisplayTwo = ({
	collection,
	documentId,
	userId,
	upVoteCount,
	downVoteCount,
	setUpVoteCount,
	setDownVoteCount,
	disabled,
}) => {
	
	const [count, setCount] = useState({
		upvotes: upVoteCount,
		downvotes: downVoteCount,
	});
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchVotes() {
			try {
				const res = await fetch(
					`/api/votes?collection=${collection}&documentId=${documentId}`
				);
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const data = await res.json();
				// setCount(data);
			} catch (err) {
				setError(err.message);
			}
		}

		fetchVotes();
	}, [collection, documentId]);

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
				setUpVoteCount(data.upvotes);
				setDownVoteCount(data.downvotes);
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
				// setCount(data);
				setUpVoteCount(data.upvotes);
				setDownVoteCount(data.downvotes);
			} catch (err) {
				setError(err.message);
			}
		}

		fetchVotes();
	};

	return (
		<div className='flex justify-around w-1/2 mx-auto'>
			<button
				className='vote-display'
				onClick={handleUpVote}
				disabled={disabled}
			>
				<span className='text-triary'>
					<BsFillHandThumbsUpFill />
				</span>
				<span>
					{/* {count?.upvotes} */}
					{upVoteCount}
				</span>
			</button>
			<button
				className='vote-display '
				onClick={handleDownVote}
				disabled={disabled}
			>
				<span>
					<BsHandThumbsDownFill />
				</span>
				<span>
					{/* {count?.downvotes} */}
					{downVoteCount}
				</span>
			</button>
		</div>
	);
};

export default VoteDisplayTwo;
