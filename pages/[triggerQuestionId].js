import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import VoteDisplay from '../components/TriggerQuestionsDisplay/VoteDisplay';
import TriggerQuestionStats from '../components/TriggerQuestionsDisplay/TriggerQuestionStats';
import DiscussionQuestionsDisplay from '../components/DiscussionQuestionsDisplay/ActiveDiscussionsByTriggerQuestionId';
import MinimumArticle from '../components/articleDisplays/MinimumArticle';
import Spinner from '../components/utils/Spinner';
import DiscussionByCategory from '../components/DiscussionQuestionsDisplay/byCategory/CategoryDiscussionFilter';
import CategoryDiscussionFilter from '../components/DiscussionQuestionsDisplay/byCategory/CategoryDiscussionFilter';

const TriggerQuestionPage = () => {
	const [triggerQuestion, setTriggerQuestion] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const router = useRouter();
	const { triggerQuestionId } = router.query;

	useEffect(() => {
		fetch(`/api/${triggerQuestionId}`)
			.then((res) => res.json())
			.then((data) => {
				setTriggerQuestion(data);
				setIsLoading(false);
			});
	}, [triggerQuestionId]);

	return (
		<>
			{isLoading && (
				<div className='text-8xl h-screen grid place-items-center text-black/10 '>
					<Spinner />
				</div>
			)}

			<div className='flex flex-col lg:p-4  gap-4 my-8 mx-2'>
				<TriggerQuestionStats
					category={triggerQuestion.category}
					question={triggerQuestion.question}
					upvotes={triggerQuestion.upvotes}
					downvotes={triggerQuestion.downvotes}
					discussions={
						triggerQuestion.discussions ? triggerQuestion.discussions.length : 0
					}
				/>
				<DiscussionQuestionsDisplay id={triggerQuestion._id} />
				<MinimumArticle articles={triggerQuestion.relatedArticles} />
				<CategoryDiscussionFilter category='sports' />
				<CategoryDiscussionFilter category='entertainment' />
			</div>
		</>
	);
};

export default TriggerQuestionPage;

export const SectionHeading = ({ title }) => {
	return (
		<div className='text-xl mt-4 text-primary'>
			<span>{title}</span>
		</div>
	);
};
