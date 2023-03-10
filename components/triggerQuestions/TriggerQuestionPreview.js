import TriggerQuestionStats from './TriggerQuestionStats';
import { useState, useEffect } from 'react';
import Spinner from '../utils/Spinner';
import Link from 'next/link';
import SectionHeading from '../utils/SectionHeading';
import VoteDisplayTwo from '../utils/VoteDisplayTwo';

const TriggerQuestionsPreview = ({userId}) => {
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
						className='snap-center w-3/4 xl:w-1/3 grid     flex-shrink-0     mx-4     shadow-lg h-full'
						style={{
							backgroundImage: `url(${question.image})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					>
						<div className='bg-gradient-to-t from-black via-black/70 to-black/70 p-12 h-full'>
						<div className="text-xl lg:text-2xl pb-4  text-center font-oswald font scale-y-125 font-semibold opacity-80 tracking-wider space-x-8 items-center">
				{question.question} 
			</div>
							<VoteDisplayTwo
							collection={'trigger_questions'}					
							documentId={question._id}
							userId={userId}



							/>
							<div className='grid place-items-center mt-16'>
								<Link href={`/${question._id}`}>
									<span className=' font-tinos md:text-2xl text-light font-black border bg-primary border-dark/10 p-4 hover:scale-90 hover:bg-primary/80 hover:text-light transition duration-700 shadow hover:shadow-2xl '>
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
