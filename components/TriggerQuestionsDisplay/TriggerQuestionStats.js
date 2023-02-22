import { QuestionByCategory } from './TriggerQuestionDisplay';
import VoteDisplay from './VoteDisplay';

const TriggerQuestionStats = ({ category, question, upvotes, downvotes, discussions }) => {
	return (
		<>
			<QuestionByCategory category={category} question={question} />
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
