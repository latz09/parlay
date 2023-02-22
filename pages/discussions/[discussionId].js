const IndividualDiscussionPage = () => {
	return (
		<div className='text-2xl text-center my-8 text-red-400 grid gap-8'>
			<div className='font-thin text-3xl '>Individual Discussion Page</div>
			<div> pulls in discussions collection from mongodb</div>
			<div>
				displays all the comments of the discussions plus allows you to comment
			</div>
		</div>
	);
};

export default IndividualDiscussionPage;

