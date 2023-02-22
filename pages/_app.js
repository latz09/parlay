import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	const pageAnimateVariable = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				duration: 1,
			},
		},
		exit: { opacity: 0, transition: { duration: 0.4 } },
	};

	return (
		<div>
			<AnimatePresence mode='wait'>
				<motion.div
					key={router.route}
					variants={pageAnimateVariable}
					initial='hidden'
					animate='visible'
					exit='exit'
				>
					<Component {...pageProps} />{' '}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
