import Link from 'next/link';
import { SectionHeading } from '../../pages/[triggerQuestionId]';
import CastTriggerQuestionVote from './utils/CastTriggerQuestionVote';
// import CategoryAndQuestion from './CategoryAndQuestion';
import JoinDiscussionLink from '../utils/JoinDiscussionLink';
import FullArticle from '../articleDisplays/FullArticle';
import VoteDisplay from '../utils/VoteDisplay';

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
		
			<TriggerQuestion category={category} question={question} />

			<VoteDisplay
				upvotes={upvotes}
				downvotes={downvotes}
				discussions={discussions}
				disabled={true}
			/>
			<FullArticle articles={relatedArticles} />
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

export const TriggerQuestion = ({ question }) => {
	return (
		<div className=' py-2 px-8 rounded-lg text-center text-primary font-semibold tracking-wider space-x-8 items-center text-2xl'>
			<span className='text-2xl'>{question}</span>
		</div>
	);
};
