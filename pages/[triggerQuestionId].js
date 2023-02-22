import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import VoteDisplay from '../components/TriggerQuestionsDisplay/VoteDisplay';
import CategoryAndQuestion from '../components/TriggerQuestionsDisplay/CategoryAndQuestion';
import DiscussionQuestionsDisplay from '../components/DiscussionQuestionsDisplay/DiscussionQuestionsDisplay';
import MinimumArticle from '../components/articleDisplays/MinimumArticle';
import Spinner from '../components/utils/Spinner';

const TriggerQuestionPage = () => {
	const [triggerQuestion, setTriggerQuestion] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	console.log(triggerQuestion);

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
				<div className='grid gap-2'>
					<CategoryAndQuestion
						category={triggerQuestion.category}
						question={triggerQuestion.question}
					/>
					<VoteDisplay
						upvotes={triggerQuestion.upvotes}
						downvotes={triggerQuestion.downvotes}
						discussions={
							triggerQuestion.discussions
								? triggerQuestion.discussions.length
								: 0
						}
					/>
				</div>
				<div className='grid   w-full h-full max-w-7xl mx-auto '>
					<span className='text-xl mt-4 text-primary tracking-widest'>active discussions</span>
					<DiscussionQuestionsDisplay triggerQuestionId={triggerQuestion._id} />
				</div>
				<div className='max-w-7xl mx-auto w-full'>
					<span className='text-xl mt-4'>related articles</span>
					<MinimumArticle articles={triggerQuestion.relatedArticles} />
				</div>
				
				
			</div>
		</>
	);
};

export default TriggerQuestionPage;


