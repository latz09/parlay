import { MdOutlineArticle } from 'react-icons/md';
import { useState, useEffect } from 'react';

const MinimumArticle = ({ articles }) => {

	return (
		//component that displays an array of articles and allows the user to scroll through them horizontally
		<div className='snap-x mx-auto snap-mandatory  flex w-full  overflow-scroll scrollbar-hide my-2 '>
			{articles ? articles.map((article, index) => (
				<div
					key={index}
					className='snap-start w-1/2 xl:w-1/4  flex-shrink-0  flex px-4 py-8  m-4 border shadow-lg '
				>
					<div className='flex flex-col justify-between gap-4  '>
						<div className='grid gap-2'>
							<span className='text-xl'>
								<MdOutlineArticle />
							</span>
							<div className='font-bold '> {article.title}</div>
						</div>
						<span>{article.source}</span>
						{/* <div>{article.openingParagraph}</div> */}
					</div>
				</div>
			)): 'loading...'}
		</div>
      
	);
};

export default MinimumArticle;
