import { MdOutlineArticle } from 'react-icons/md';
import { FaLink } from 'react-icons/fa';
import SocialShares from '../utils/SocialShares';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const RelatedArticlesDisplay = ({ articles }) => {
	
	return (
		<div className='snap-y mx-auto snap-mandatory  flex w-full  overflow-y-scroll scrollbar-hide my-2 text-light '>
			{articles.map((article, index) => (
				<motion.div
					key={index}
					className='snap-center mr-2 lg:mr-8  flex-shrink-0 w-4/5 md:w-3/4 xl:w-1/3 flex'
					initial={{ opacity: 0, x: 60 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -60 }}
					transition={{ duration: 0.9, delay: 0.2 }}
				>
					<div
						style={{
							backgroundImage: `url(${article.backgroundImage})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='grid gap-2 relative p-2 lg:p-8 rounded-lg '
					>
						<div className='absolute inset-0 bg-gradient-to-t  from-black/90 via-black/60 to-black/30 z-10 rounded-lg '></div>{' '}
						{/* Add the semi-transparent dark background */}
						<span className='text-3xl '>
							<MdOutlineArticle />
						</span>
						<div className='font-semibold opacity-90 font-tinos text-2xl z-20'>
							{' '}
							{article.title}
						</div>
						<span className='font-semibold opacity-80 z-20'>
							{article.source}
						</span>
						<div className='font-semibold z-20 '>{article.openingParagraph}</div>
						<div className='my-2 z-20 flex justify-between items-center '>
							<SocialShares url={article.articleLink} />
							<a href={article.articleLink}
								target="_blank"
								rel="noreferrer"
							>
								<div className='px-6 py-2  grid gap-1   place-items-center'>
									<span className='text-3xl text-primary'>
										<FaLink />
									</span>
									<span className='text-xs'>article</span>
								</div>
							</a>
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
};

export default RelatedArticlesDisplay;
