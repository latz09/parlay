import { MdOutlineArticle } from 'react-icons/md';
import SocialShares from '../utils/SocialShares';
import { motion } from 'framer-motion';

const RelatedArticlesDisplay = ({ articles }) => {
	
	return (
		<div className='snap-y mx-auto snap-mandatory  flex w-full  overflow-y-scroll scrollbar-hide my-2 '>
			{articles.map((article, index) => (
				<motion.div
					key={index}
					className='snap-center   mx-4 lg:mx-8 flex-shrink-0 w-3/4 xl:w-1/2  flex   '
					initial={{ opacity: 0, scale: .7 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.9 }}

				>
					<div className='grid gap-2'>
						<span className='text-3xl '>
							<MdOutlineArticle />
						</span>

						<div className='font-semibold opacity-90 font-tinos text-2xl'> {article.title}</div>
						<span className="font-semibold text-dark/70">{article.source}</span>
						<div className="font-semibold">{article.openingParagraph}</div>
						<div className="my-2">
							<SocialShares url={article.articleLink} />
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
};

export default RelatedArticlesDisplay;

// import {
// 	MdOutlineArticle,
// 	MdKeyboardArrowLeft,
// 	MdKeyboardArrowRight,
//   } from 'react-icons/md';
//   import SocialShares from '../utils/SocialShares';
//   import { motion } from 'framer-motion';
//   import { useState, useRef } from 'react';
  
//   const RelatedArticlesDisplay = ({ articles }) => {
// 	const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
// 	const [scrollRightVisible, setScrollRightVisible] = useState(true);
// 	const articlesContainerRef = useRef(null);
  
// 	const handleScroll = () => {
// 	  const container = articlesContainerRef.current;
// 	  if (container.scrollLeft > 0 && !scrollLeftVisible) {
// 		setScrollLeftVisible(true);
// 	  } else if (container.scrollLeft === 0 && scrollLeftVisible) {
// 		setScrollLeftVisible(false);
// 	  }
  
// 	  if (
// 		container.scrollLeft < container.scrollWidth - container.clientWidth &&
// 		!scrollRightVisible
// 	  ) {
// 		setScrollRightVisible(true);
// 	  } else if (
// 		container.scrollLeft === container.scrollWidth - container.clientWidth &&
// 		scrollRightVisible
// 	  ) {
// 		setScrollRightVisible(false);
// 	  }
// 	};
  
// 	const handleScrollLeft = () => {
// 	  const container = articlesContainerRef.current;
// 	  const scrollDistance =
// 		container.clientWidth +
// 		.5 * parseFloat(getComputedStyle(container).marginLeft);
// 	  container.scrollBy({
// 		left: -scrollDistance,
// 		behavior: 'smooth',
// 	  });
// 	};
  
// 	const handleScrollRight = () => {
// 	  const container = articlesContainerRef.current;
// 	  const scrollDistance =
// 		container.clientWidth +
// 		.2 * parseFloat(getComputedStyle(container).marginLeft);
// 	  container.scrollBy({
// 		left: scrollDistance,
// 		behavior: 'smooth',
// 	  });
// 	};
  
// 	return (
// 	  <div className='mx-auto my-2 relative text-light'>
// 		<div
// 		  className='snap-y snap-mandatory flex w-full overflow-y-scroll scrollbar-hide'
// 		  onScroll={handleScroll}
// 		  ref={articlesContainerRef}
// 		>
// 		  {articles.map((article, index) => (
// 			<motion.div
// 			  key={index}
// 			  className='snap-center mx-4 lg:mx-8 flex-shrink-0 w-5/6 md:w-1/2 flex rounded-lg'
// 			  initial={{ opacity: 0, x: 0.7 }}
// 			  animate={{ opacity: 1, x: 1 }}
// 			  transition={{ duration: 0.5 }}
// 			  style={{
// 				backgroundImage: `url(${'https://fansided.com/wp-content/uploads/imagn-images/2023/03/19749004.jpeg'})`,
// 				backgroundSize: 'cover',
// 				position: 'relative',
// 			  }}
// 			>
// 			  {/* Add a ::before pseudo-element with a dark background color */}
// 			  <div className='bg-gradient-to-r  from-black/95 via-black/80 to-black/60 absolute inset-0 z-10 rounded-lg'></div>
// 			  <div className='grid gap-2 p-4 ' style={{ zIndex: 20 }}>
// 				<span className='text-3xl'>
// 				  <MdOutlineArticle />
// 				</span>
  
// 				<div className='font-semibold opacity-90 font-tinos text-2xl'>
// 				  {' '}
// 				  {article.title}
// 				</div>
// 				<span className='font-semibold text-dark/70'>
// 				  {article.source}
// 				</span>
// 				<div className='font-bold '>{article.openingParagraph}</div>
// 				<div className='my-2'>
// 				  <SocialShares url={article.articleLink} />
// 				</div>
// 			  </div>
// 			</motion.div>
// 		  ))}
// 		</div>
// 		{scrollLeftVisible &&
// 		  <motion.button
// 		  className='hidden sm:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary/80 rounded-full z-20 p-2'
// 		  onClick={handleScrollLeft}
// 		  whileHover={{ scale: 1.1 }}
// 		  whileTap={{ scale: 0.9 }}
// 		>
// 		  <MdKeyboardArrowLeft className='w-8 h-8 text-light' />
// 		</motion.button>
// 		}
// 		{scrollRightVisible && (
// 		  <motion.button
// 			className='hidden sm:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary/80 rounded-full z-20 p-2'
// 			onClick={handleScrollRight}
// 			whileHover={{ scale: 1.1 }}
// 			whileTap={{ scale: 0.9 }}
// 		  >
// 			<MdKeyboardArrowRight className='w-8 h-8 text-light' />
// 		  </motion.button>
// 		)}
// 	  </div>

// 	);
// 	  };

// export default RelatedArticlesDisplay;
