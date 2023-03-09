import TriggerQuestionStats from './TriggerQuestionStats';
import { useState, useEffect } from 'react';
import Spinner from '../utils/Spinner';
import Link from 'next/link';
import SectionHeading from '../utils/SectionHeading';

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
		<div className='grid place-items-center gap-8 h-full'>
			<div className='text-2xl lg:text-5xl font-oswald uppercase mt-4 font-semibold opacity-80'>
				<span>parlays</span>
			</div>
			<div className=' snap-y mx-auto snap-mandatory   flex w-full  h-full overflow-y-scroll scrollbar-hide my-2  text-[#ffffff]'>
				{triggerQuestions.map((question) => (
					<div
						key={question._id}
						className='snap-center w-3/4 xl:w-1/3 grid border border-primary/50    flex-shrink-0     mx-2     shadow-lg h-full'
						style={{
							backgroundImage: `url(${question.image})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					>
						<div className='bg-gradient-to-t from-black via-black/70 to-black/70 py-12 h-full'>
							<TriggerQuestionStats
								id={question._id}
								category={question.category}
								question={question.question}
								upvotes={question.upvotes.length}
								downvotes={question.downvotes.length}
								discussions={question.discussions}
								relatedArticles={question.relatedArticles}
							/>
							<div className='grid place-items-center mt-16'>
								<Link href={`/${question._id}`}>
									<span className=' font-tinos text-2xl text-light font-black border bg-primary border-dark/20 p-4 hover:scale-90 hover:bg-primary/80 hover:text-light transition duration-700 shadow hover:shadow-2xl'>
										View This Parlay
									</span>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TriggerQuestionsPreview;

// https://www.gannett-cdn.com/presto/2023/02/06/NPPP/f70e1e5b-c92e-4173-985c-080ef76e315f-USATSI_19804048.jpg
