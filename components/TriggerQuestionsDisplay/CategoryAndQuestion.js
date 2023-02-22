const CategoryAndQuestion = ({category, question}) => {
	return (
		<>
			<div className='text-3xl'>{category}</div>
			<div className='text-xl'>{question}</div>
		</>
	);
};

export default CategoryAndQuestion;
