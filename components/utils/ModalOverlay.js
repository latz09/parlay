import { AnimatePresence, motion } from 'framer-motion';

const ModalOverlay = ({ children, setModalIsOpen, topic }) => {
	
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
		<AnimatePresence >
		<motion.div
			variants={backDropVariant}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='fixed top-0 left-0 w-full h-full   text-light bg-dark/90 backdrop-blur-md '
		>
			<div className=' flex flex-col max-w-4xl mx-auto  '>
				<div className='grid place-items-center w-full  lg:flex lg:justify-between lg:items-center text-lg lg:text-3xl tracking-wider h-[10vh] mx-4'>
					<div className="italic opacity-70 text-primary font-semibold order-2 lg:order-1 ">{topic}</div>
					<div
						className=' text-white  cursor-pointer order  order-1 lg:order-2'
						onClick={() => {
							setModalIsOpen(false);
						}}
					>
						close
					</div>
				</div>
				<div className='h-full '>{children}</div>
			</div>
		</motion.div>
		</AnimatePresence>
	);
};

export default ModalOverlay;
