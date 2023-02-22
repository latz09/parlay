// fetch data from /api/discussionsByCategory/[category] and pass it to the DiscussionsByCategory component
// setState  handle loading

import { useState, useEffect } from 'react';
import { SectionHeading } from '../../../pages/[triggerQuestionId]';
import DiscussionDisplay from '../../utils/DiscussionDisplay';

const CategoryDiscussionFilter = ({ category }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [discussions, setDiscussions] = useState([]);

	useEffect(() => {
		fetch(`/api/discussionsByCategory/${category}`)
			.then((res) => res.json())

			.then((data) => {
				setIsLoading(true);
				setDiscussions(data);
				setIsLoading(false);
			});
	}, [category]);

	return (
		<div className='grid   w-full h-full max-w-7xl mx-auto'>
			{discussions.length > 1 && (
				<div className='grid gap-2'>
					<SectionHeading title={`trending ${category} discussions`} />
					<DiscussionDisplay discussions={discussions} />
				</div>
			)}
		</div>
	);
};

export default CategoryDiscussionFilter;
