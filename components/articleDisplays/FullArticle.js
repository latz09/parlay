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