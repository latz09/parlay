import { TriggerQuestion } from './TriggerQuestionDisplay';
import VoteDisplay from '../utils/VoteDisplay';

const TriggerQuestionStats = ({
	category,
	question,
	upvotes,
	downvotes,
	discussions,
	setUpVoteCount,
	setDownVoteCount,
	userId,
}) => {

	return (
		<>
			<div className="text-xl lg:text-2xl pb-4  text-center font-oswald font scale-y-125 font-semibold opacity-80 tracking-wider space-x-8 items-center">
				{question} 
			</div>
			<VoteDisplay
				upvotes={upvotes}
				downvotes={downvotes}
				discussions={discussions ? discussions.length : 0}
				disabled={true}
				usedToVote={true}
				setUpVoteCount={setUpVoteCount}
				setDownVoteCount={setDownVoteCount}

			/>
		</>
	);
};

export default TriggerQuestionStats;
