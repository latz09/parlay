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
			<div className="text-2xl pb-2 opacity-80">
				<TriggerQuestion question={question} />
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
