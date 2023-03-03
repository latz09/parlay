import { useRef, useState } from 'react';
// import { ObjectId } from 'mongodb'

const NewDiscussionForm = ({
	setIsNewDiscussionOpen,
	userId,
	triggerQId,
	category,
}) => {
	const topicInputRef = useRef();
	const desriptionInputRef = useRef();

	async function submitNewDiscussion(e) {
		e.preventDefault();
		const enteredTopic = topicInputRef.current.value;
		const enteredDescription = desriptionInputRef.current.value;
		const data = {
			userId: userId,
			topic: enteredTopic,
			description: enteredDescription,
			triggerQId: triggerQId,
			category: category,
		};

		const response = await fetch('/api/discussions/discussion', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const responseData = await response.json();

		if (!response.ok) {
			throw new Error(responseData.message || 'Something went wrong!');
		}

		setIsNewDiscussionOpen(false);
	}

	return (
		<>
			<form onSubmit={submitNewDiscussion} className='text-light/80'>
				<div className='m-8 grid gap-2'>
					<button
						className='text-end P-4'
						onClick={() => {
							setIsNewDiscussionOpen(false);
						}}
					>
						X
					</button>
					<div className='grid gap-2 '>
						<label
							htmlFor='topic'
							className='place-self-center grid  place-items-center gap-1'
						>
							<span className='text-xl'>Topic of Discussion</span>
							<span className='text-sm opacity-80 text-primary'>
								Think of it as title
							</span>
						</label>
						<input
							type='text'
							id='topic'
							required
							ref={topicInputRef}
							className='bg-dark p-2 text-triary'
						/>
					</div>

					<div className='grid gap-2'>
						<label
							htmlFor='description'
							className='place-self-center grid  place-items-center gap-1'
						>
							<span className='text-xl'>Description</span>
							<span className='text-sm opacity-80 text-primary'>
								Think of it as a short catchy headline
							</span>
							<span className='text-sm opacity-80 text-primary'>
								*Max Characters: 300
							</span>
						</label>
						<textarea
							type='text'
							rows='5'
							id='deescription'
							required
							ref={desriptionInputRef}
							maxLength='300'
							className='bg-dark'
						/>
					</div>
				</div>
				<div className='text-center'>
					<button className='btn ' type='submit'>
						Start the discussion
					</button>
				</div>
			</form>
		</>
	);
};

export default NewDiscussionForm;
