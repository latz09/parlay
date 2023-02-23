import { useEffect, useState } from 'react';

const DiscussionByCategory = () => {
	const [discussions, setDiscusions] = useState({});
	const [isLoading, setIsLoading] = useState(true);	

	const category = 'sports'

	useEffect(() => {
		fetch(`/api/discussions/category/${category}`)
			.then((res) => res.json())
			.then((data) => {
				setDiscusions(data);
				setIsLoading(false);
			});
	}, []);
	return (
		<div>
			<div></div>
		</div>
	);
};

export default DiscussionByCategory;
