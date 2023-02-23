import { useState } from 'react';
import ModalOverlay from '../utils/ModalOverlay';

const StartDiscussion = ({ id }) => {
	//id will be the trigger question id that is connected to keep the discussions in the same category
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<div className='grid place-items-center'>
				{/* <div>{id}</div> */}
				<button
					className='btn bg-triary'
					onClick={() => {
						setOpenModal(true);
					}}
				>
					Start your own discussion!
				</button>
			</div>

			{openModal && (
				<ModalOverlay setModalIsOpen={setOpenModal}>
					<DiscussionForm />
				</ModalOverlay>
			)}
		</>
	);
};

export default StartDiscussion;

const DiscussionForm = () => {
	return <div className='bg-primary/80 h-[50vh]'></div>;
};
