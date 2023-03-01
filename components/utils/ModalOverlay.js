import { AnimatePresence, motion } from 'framer-motion';

const ModalOverlay = ({ children, setModalIsOpen }) => {
	const backDropVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.4,
				delay: 0.02,
			},
		},
		exit: {
			x: '100vw',
			opacity: 0,
			transition: { delay: 0.2, duration: 1 },
		},
	};

	return (
		<AnimatePresence>
			<motion.div
				variants={backDropVariant}
				initial='hidden'
				animate='visible'
				exit='exit'
				className='fixed top-0 left-0 w-full h-full bg-dark/30   z-40'
			>
				<div className=' flex flex-col justify-between  w-full max-w-4xl mx-auto  h-full '>
				

					<div className='h-full'>{children}</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ModalOverlay;
