import Link from 'next/link';
import CastTriggerQuestionVote from './CastTriggerQuestionVote';
import CategoryAndQuestion from './CategoryAndQuestion';
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
		<div className='grid gap-4 '>
			<CategoryAndQuestion category={category} question={question} />		
			<VoteDisplay
				upvotes={upvotes}
				downvotes={downvotes}
				discussions={discussions.length}
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