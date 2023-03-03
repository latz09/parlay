import Link from 'next/link';
import { SectionHeading } from '../../pages/[triggerQuestionId]';
import CastTriggerQuestionVote from './utils/CastTriggerQuestionVote';
// import CategoryAndQuestion from './CategoryAndQuestion';
import JoinDiscussionLink from '../utils/JoinDiscussionLink';
import FullArticle from '../articleDisplays/FullArticle';
import VoteDisplay from '../utils/VoteDisplay';
import { useSession, } from 'next-auth/react';
import LoginModal from '../login/LoginModal';
import { useEffect, useState } from 'react';

const TriggerQuestionDisplay = ({
	id,
	category,
	question,
	upvotes,
	downvotes,
	discussions,
	relatedArticles,
}) => {
	const { data: session } = useSession();
	const [sessionWasFound, setSessionWasFound] = useState(false);

	useEffect(() => {
		if (session) {
			setSessionWasFound(true);
		}
	}, [session]);

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
			{sessionWasFound ? (
				<Link href={`/${id}`}>
					<JoinDiscussionLink />
				</Link>
			) : (
				<div >
					<LoginModal id={id}/>
				</div>
			)}
		</div>
	);
};

export default TriggerQuestionDisplay;


export const TriggerQuestion = ({ question }) => {
	return (
		<div className=' py-2 px-8 rounded-lg text-center font-semibold tracking-wider space-x-8 items-center '>
			<span className='text-4xl'>{question}</span>
		</div>
	);
};
