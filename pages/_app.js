import { AnimatePresence, motion } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps, session, router }) {
	const pageAnimateVariable = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.8,
				duration: 1.4,
			},
		},
		exit: { opacity: 0, transition: { duration: 0.4 } },
	};

	return (
		<div>
			<SessionProvider session={session} >
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
			</SessionProvider>
		</div>
	);
}

export default MyApp;
