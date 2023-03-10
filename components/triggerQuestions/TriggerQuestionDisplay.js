import Link from 'next/link';
import { SectionHeading } from '../../pages/[triggerQuestionId]';
import CastTriggerQuestionVote from './utils/CastTriggerQuestionVote';
// import CategoryAndQuestion from './CategoryAndQuestion';
import JoinDiscussionLink from '../utils/JoinDiscussionLink';
import FullArticle from '../articleDisplays/FullArticle';
import VoteDisplay from '../utils/VoteDisplay';
import { useSession } from 'next-auth/react';
import LoginModal from '../login/LoginModal';
import { useEffect, useState } from 'react';
import Spinner from '../utils/Spinner';
import VoteDisplayTwo from '../utils/VoteDisplayTwo';

const TriggerQuestionDisplay = ({
	id,
	category,
	question,
	upvotes,
	downvotes,
	discussions,
	relatedArticles,
	userId,
}) => {
	const { data: session, isLoading } = useSession();
	const [sessionWasFound, setSessionWasFound] = useState(false);

	const [upVoteCount, setUpVoteCount] = useState(upvotes.length);

	const [downVoteCount, setDownVoteCount] = useState(downvotes.length);

	useEffect(() => {
		if (session) {
			setSessionWasFound(true);
		}
	}, [session]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className='grid gap-4'>
			<div className='text-2xl lg:text-4xl '>
				<TriggerQuestion question={question} />
			</div>			
			<VoteDisplayTwo
				collection={'trigger_questions'}
				documentId={id}
				userId={userId}

				upVoteCount={upVoteCount}
				downVoteCount={downVoteCount}
				setUpVoteCount={setUpVoteCount}
				setDownVoteCount={setDownVoteCount}
				
			/>
			<FullArticle articles={relatedArticles} />

			<CastTriggerQuestionVote
				userId={userId}
				triggerId={id}
				documentId={id}
				collection={'trigger_questions'}
				setUpVoteCount={setUpVoteCount}
				setDownVoteCount={setDownVoteCount}
				disabled={!sessionWasFound}
			/>
			{sessionWasFound ? (
				<Link href={`/${id}`}>
					<JoinDiscussionLink />
				</Link>
			) : (
				<div>
					<LoginModal id={id} />
				</div>
			)}
		</div>
	);
};

export default TriggerQuestionDisplay;

export const TriggerQuestion = ({ question }) => {
	return (
		<div className=' py-2  text-center font-oswald  md:scale-y-125 font-semibold opacity-80 tracking-wider   '>
			<span>{question}</span>
		</div>
	);
};
