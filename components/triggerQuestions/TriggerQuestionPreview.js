import TriggerQuestionStats from './TriggerQuestionStats';
import { useState, useEffect } from 'react';
import Spinner from '../utils/Spinner';
import Link from 'next/link';

const TriggerQuestionsPreview = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [triggerQuestions, setTriggerQuestions] = useState([]);

	useEffect(() => {
		fetch(`/api/triggerQuestions`)
			.then((res) => res.json())
			.then((data) => {
				setIsLoading(true);
				setTriggerQuestions(data);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className="grid place-items-center gap-8">
        <div className="text-5xl tracking-wider text-primary font-tinos uppercase opacity-80">Parlays</div>
			<div className=' snap-y mx-auto snap-mandatory   flex w-full   overflow-y-scroll scrollbar-hide my-2 '>

				{triggerQuestions.map((question) => (
					<div
						key={question._id}
						className='snap-center w-3/4 xl:w-1/3 grid border border-primary/50 scale-90  shadow-secondary/20  flex-shrink-0  py-16   mx-2     shadow-lg '
					>
						<TriggerQuestionStats
							id={question._id}
							category={question.category}
							question={question.question}
							upvotes={question.upvotes}
							downvotes={question.downvotes}
							discussions={question.discussions}
							relatedArticles={question.relatedArticles}
						/>
						<div className='grid place-items-center mt-16'>
							<Link href={`/${question._id}`}>
								<span className=' font-tinos text-2xl text-primary font-black border border-dark/20 p-4 hover:scale-90 hover:bg-primary hover:text-light transition duration-700 shadow hover:shadow-2xl'>View This Parlay</span>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TriggerQuestionsPreview;
