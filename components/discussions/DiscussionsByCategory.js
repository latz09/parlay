// fetch data from /api/discussionsByCategory/[category] and pass it to the DiscussionsByCategory component
// setState  handle loading

import { useState, useEffect } from 'react';
import ButtonLink from '../utils/ButtonLink';
import SectionHeading from '../utils/SectionHeading';
import Spinner from '../utils/Spinner';
import DiscussionDisplay from './utils/DiscussionDisplay';

const DiscussionsByCategory = ({ category, userId }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [discussions, setDiscussions] = useState(null);
	

	useEffect(() => {
		fetch(`/api/discussions/byCategory/${category}`)
			.then((res) => res.json())

			.then((data) => {
				setIsLoading(true);
				setDiscussions(data);
				setIsLoading(false);
			});
	}, [category]);
	if (isLoading) {
		return (
			<div className='h-[45vh] grid place-items-center'>
				<Spinner />
			</div>
		);
	}
	return (
		<>
		{discussions.length > 0 && 

		<div className='grid   w-full h-full max-w-7xl mx-auto'>
			<div className='grid gap-2'>
				<SectionHeading title={`trending ${category} discussions`} />
				<DiscussionDisplay discussions={discussions} userId={userId} />
			</div>
		</div>}
		</>
	);
};

export default DiscussionsByCategory;

//MAKE THIS DISCUSSIONS BY FILTER
