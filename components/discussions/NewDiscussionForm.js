import { useRef, useState } from 'react';

import { VscChromeClose } from 'react-icons/vsc';

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
		<div className="h-full text-light flex items-center">
			<form onSubmit={submitNewDiscussion} className='border-2 border-primary w-1/2 mx-auto bg-primary '>
				<div className='m-2 lg:m-8 grid gap-8 tracking-wider '>
					<div className='flex justify-between'>
						<div className='text-3xl'>New Discussion</div>
						<button
							className='mr-4 text-4xl  transition duration-700'
							onClick={() => {
								setIsNewDiscussionOpen(false);
							}}
						>

						<VscChromeClose />
						</button>
					</div>

					<div className='grid gap-2 '>
						<label
							htmlFor='topic'
							className='grid'
						>
							<span className='text-2xl font-tinos'>Topic </span>
							
						</label>
						<input
							type='text'
							id='topic'
							required
							ref={topicInputRef}
							className='form-input text-3xl'
						/>
					</div>

					<div className='grid gap-2'>
						<label
							htmlFor='description'
							className='grid   gap-1'
						>
							<span className='text-2xl font-tinos '>Description</span>
							
							<span className='text-sm opacity-80 text-primary'>
								*Max Characters: 300
							</span>
						</label>
						<textarea
							type='text'
							rows='3'
							id='deescription'
							required
							ref={desriptionInputRef}
							maxLength='300'
							className='form-input mx-2 lg:mx-8'
						/>
					</div>
				</div>
				<div className='text-center'>
					<button
						className='p-4 mb-4 text-2xl tracking-wider uppercase  font-oswald font-bold hover:scale-90 transition duration-700'
						type='submit'
					>
						start discussion
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewDiscussionForm;
