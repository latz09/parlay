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
			<div className='text-4xl '>
				<TriggerQuestion category={category} question={question} />
			</div>

			<VoteDisplay
				upvotes={upVoteCount}
				downvotes={downVoteCount}
				discussions={discussions}
				disabled={true}
				usedToVote={false}
			/>
			<FullArticle articles={relatedArticles} />
			
			<CastTriggerQuestionVote
				userId={userId}
				triggerId={id}
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
		<div className=' py-2 px-8 rounded-lg text-center font-oswald font scale-y-125 font-semibold opacity-80 tracking-wider space-x-8 items-center  '>
			<span>{question}</span>
		</div>
	);
};


