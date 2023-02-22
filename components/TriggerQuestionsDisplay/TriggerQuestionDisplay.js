import Link from 'next/link';
import CastTriggerQuestionVote from './CastTriggerQuestionVote';
// import CategoryAndQuestion from './CategoryAndQuestion';
import JoinDiscussionLink from './JoinDiscussionLink';
import RelatedArticlesDisplay from './RelatedArticlesDisplay';
import VoteDisplay from './VoteDisplay';

const TriggerQuestionDisplay = ({
	id,
	category,
	question,
	upvotes,
	downvotes,
	discussions,
	relatedArticles,
}) => {
	return (
		<div className='grid gap-4'>
			{/* <CategoryAndQuestion category={category} question={question} />		 */}
			{/* <span className="text-3xl bg-triary">{question}</span> */}
			<QuestionByCategory category={category} question={question} />
			<VoteDisplay
				upvotes={upvotes}
				downvotes={downvotes}
				discussions={discussions}
				disabled={true}
				
			/>
			<RelatedArticlesDisplay articles={relatedArticles} />
			<CastTriggerQuestionVote />
			<Link href={`/${id}`}>
				<JoinDiscussionLink />
			</Link>
		</div>
	);
};

export default TriggerQuestionDisplay;

// pink: #EC449b
// green #99F443

export const QuestionByCategory = ({ category, question }) => {
	return (
		<div className=" py-2 px-8 rounded-lg text-center text-primary font-semibold tracking-wider space-x-8 items-center text-2xl">
			<span className="text-2xl">{question}</span>
			
		</div>
	);
};
