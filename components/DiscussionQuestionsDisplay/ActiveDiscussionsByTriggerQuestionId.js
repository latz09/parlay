import { useState, useEffect } from 'react';
import { SectionHeading } from '../../pages/[triggerQuestionId]';
import VoteDisplay from '../TriggerQuestionsDisplay/VoteDisplay';
import DiscussionDisplay from '../utils/DiscussionDisplay';
import Spinner from '../utils/Spinner';

const ActiveDiscussionsByTriggerQuestionId = ({ id }) => {
	
	//go through all of discussions that have a triggerquestionId that matches the current trigger question
	const [discussions, setDiscussions] = useState();


	useEffect(() => {
		fetch(`/api/discussions/${id}`)
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

export default ActiveDiscussionsByTriggerQuestionId;
