import { useRef, useState } from 'react';
// import { ObjectId } from 'mongodb'

const NewDiscussionForm = ({
	setIsNewDiscussionOpen,
	userId,
	triggerQId,
	category,
	discussions,
	setDiscussions,
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

		
		fetch(`/api/discussions/byTriggerQuestion/${triggerQId}`)
			.then((res) => res.json())
			.then((data) => {
				setDiscussions(data);
			});
		

		setIsNewDiscussionOpen(false);
	}

	return (
		<>
			<form onSubmit={submitNewDiscussion} className='text-light/80'>
				<div className='m-2 lg:m-8 grid gap-2 tracking-wider'>
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
							<span className='text-2xl font-tinos'>Topic of Discussion</span>
							<span className='text-sm opacity-80 text-primary'>
								Think of it as catchy headline or take you have to start the discussion
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
							<span className='text-2xl font-tinos '>Description</span>
							<span className='text-sm opacity-80 text-primary'>
								Think of it as a pinned post in a forum
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
					<button className='mt-4 lg:text-2xl font-tinos font-bold border border-primary/50 text-dark/80 text-light p-4 md:hover:scale-90 md:hover:bg-primary hover:text-light transition duration-700 shadow hover:shadow-2xl ' type='submit'>
						Start the discussion
					</button>
				</div>
			</form>
		</>
	);
};

export default NewDiscussionForm;
