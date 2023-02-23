import { TriggerQuestion } from './TriggerQuestionDisplay';
import VoteDisplay from '../utils/VoteDisplay';

const TriggerQuestionStats = ({ category, question, upvotes, downvotes, discussions }) => {
	return (
		<>
			<TriggerQuestion question={question} />
			<VoteDisplay
				upvotes={upvotes}
				downvotes={downvotes}
				discussions={
					discussions ? discussions.length : 0
				}
				disabled={true}
			/>
		</>
	);
};

export default TriggerQuestionStats;
