import { MdOutlineArticle } from 'react-icons/md';
import SocialShares from '../utils/SocialShares';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const RelatedArticlesDisplay = ({ articles }) => {
	const [shouldAnimate, setShouldAnimate] = useState(false);
	return (
		<div className='snap-y mx-auto snap-mandatory  flex w-full  overflow-y-scroll scrollbar-hide my-2 text-light '>
			{articles.map((article, index) => (
			  <motion.div
			  key={index}
			  className="snap-center mx-2 lg:mx-8 flex-shrink-0 w-3/4 xl:w-1/3 flex"
			  initial={{ opacity: 0, x: 60 }}
			  animate={{ opacity: 1, x: 0 }}
			  exit={{ opacity: 0, x: -60 }}
			  transition={{ duration: 0.9, delay: 0.2 }}
			>
					<div
						style={{
							backgroundImage: `url(${'https://www.boston.com/wp-content/uploads/2021/12/Brady-Grok-61ad4874f06a7-scaled.jpg'})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						className='grid gap-2 relative p-2 lg:p-8 rounded-lg '
					>
						<div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60 z-10 rounded-lg '></div>{' '}
						{/* Add the semi-transparent dark background */}
						<span className='text-3xl '>
							<MdOutlineArticle />
						</span>
						<div className='font-semibold opacity-90 font-tinos text-2xl z-20'>
							{' '}
							{article.title}
						</div>
						<span className='font-semibold text-dark/70 z-20'>
							{article.source}
						</span>
						<div className='font-semibold z-20'>{article.openingParagraph}</div>
						<div className='my-2 z-20'>
							<SocialShares url={article.articleLink} />
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
};

export default RelatedArticlesDisplay;
