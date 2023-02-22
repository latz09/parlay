import VoteDisplay from './VoteDisplay';

const TriggerQuestionStats = ({ category, question, upvotes, downvotes, discussions }) => {
	return (
		<>
			<div className='text-3xl mb-4 text-center tracking-wider'>{question}</div>
			<VoteDisplay
				upvotes={upvotes}
				downvotes={downvotes}
				discussions={
					discussions ? discussions.length : 0
				}
			/>
		</>
	);
};

export default TriggerQuestionStats;
