import { useState, useEffect } from 'react';
import SectionHeading from '../utils/SectionHeading';


import DiscussionDisplay from './utils/DiscussionDisplay';

const DiscussionsByTriggerQuestionId = ({ id }) => {
	//go through all of discussions that have a triggerquestionId that matches the current trigger question
	const [discussions, setDiscussions] = useState();
console.log(discussions)
	useEffect(() => {
		fetch(`/api/discussions/byTriggerQuestion/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setDiscussions(data);
			});
	}, [id]);

	return (
		<div className='grid   w-full h-full max-w-7xl mx-auto '>
			<SectionHeading title='active discussions' />
			<DiscussionDisplay discussions={discussions} />
		</div>
	);
};

export default DiscussionsByTriggerQuestionId;
