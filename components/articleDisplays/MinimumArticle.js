import { MdOutlineArticle } from 'react-icons/md';
import SectionHeading from '../utils/SectionHeading';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MinimumArticle = ({ articles }) => {

	const image= 'https://www.nj.com/resizer/ZOM2NFgwUmJBlXhUoSwsxcf5AyA=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/VM7GZI635VAPZDH7RQ2TYCZQVQ.jpg'
	
	return (
		//component that displays an array of articles and allows the user to scroll through them horizontally
		<div className='grid   w-full h-full max-w-7xl mx-auto'>
			<SectionHeading title='related articles' />
			<div className='snap-x mx-auto snap-mandatory  flex w-full  overflow-scroll scrollbar-hide my-2 '>
				{articles
					? articles.map((article, index) => (
							<div
								key={index}
								className='snap-start w-1/2 lg:w-1/3  flex-shrink-0  flex px-4 py-8  m-4  '
							>
								
								<div className='flex flex-col justify-between gap-4 place-items-cente '>
									<div className="grid place-items-cente ">
									<Image src={image} width={400} height={200} alt=''/>
									</div>
									<div className='grid gap-2'>
									
										<div className='font-bold  mx-4 '>
											{' '}
											{article.title}
										</div>
									</div>
									<span className='text-triary font-bold tracking-wider mx-4'>
										{article.source}
									</span>
									{/* <div>{article.openingParagraph}</div> */}
								</div>
							</div>
					  ))
					: 'loading...'}
			</div>
		</div>
	);
};

export default MinimumArticle;
