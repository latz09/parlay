import {motion } from 'framer-motion';
import {
	TwitterShareButton,
	TwitterIcon,
	FacebookShareButton,
	FacebookIcon,
	EmailShareButton,
	EmailIcon,
} from 'next-share';

const SocialShares = ({ url }) => {
	return (
		<div className='flex space-x-3 place-items-center'>
			<FloatContainer>
				<TwitterShareButton url={url} windowWidth={800} windowHeight={700}>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
			</FloatContainer>
			<FloatContainer>
				<FacebookShareButton url={url}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
			</FloatContainer>
			<FloatContainer>
				<EmailShareButton
					url={url}
					subject={'Next Share'}
					body='check this out from YeorNay.com!'
				>
					<EmailIcon size={32} round />
				</EmailShareButton>
			</FloatContainer>
		</div>
	);
};

export default SocialShares;

export const FloatContainer = ({ children }) => {
	return (
		<>
			<motion.div
				initial={{ scale: 0.97, y: '-3px', opacity: .78 }}
				animate={{ scale: 1.02, y: '3px', opacity: 1 }}
				transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
			>
				{children}
			</motion.div>
		</>
	);
};
