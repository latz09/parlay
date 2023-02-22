import { MdOutlineArticle } from 'react-icons/md';
import SocialShares from '../utils/SocialShares';

const RelatedArticlesDisplay = ({ articles }) => {
	return (
		<div className='snap-x mx-auto snap-mandatory  flex w-full  overflow-scroll scrollbar-hide my-4'>
			{articles.map((article, index) => (
				<div
					key={index}
					className='snap-center  mx-4 lg:mx-8 flex-shrink-0 w-5/6 xl:w-2/3  flex shadow-lg  p-4'
				>
					<div className='grid gap-2'>
						<span className='text-3xl'>
							<MdOutlineArticle />
						</span>

						<div className='font-bold'> {article.title}</div>
						<span>{article.source}</span>
						<div>{article.openingParagraph}</div>
						<div className="my-2">
							<SocialShares url={article.articleLink} />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default RelatedArticlesDisplay;
