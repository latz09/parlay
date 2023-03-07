import { TriggerQuestion } from './TriggerQuestionDisplay';
import VoteDisplay from '../utils/VoteDisplay';

const TriggerQuestionStats = ({
	category,
	question,
	upvotes,
	downvotes,
	discussions,
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
			/>
		</>
	);
};

export default TriggerQuestionStats;
