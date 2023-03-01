import { useState } from 'react';
import JoinDiscussionLink from '../utils/JoinDiscussionLink';
import ModalOverlay from '../utils/ModalOverlay';
import SignUpForm from './SignUpForm';


const LoginModal = ({id}) => {

	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<div className='grid place-items-center'>
				
				<button
					className=''
					onClick={() => {
						setOpenModal(true);
					}}
				>
					<JoinDiscussionLink />
				</button>
			</div>

			{openModal && (
				<ModalOverlay setModalIsOpen={setOpenModal}>
					<div className="h-full grid place-items-center text-triary font-bold text-center">
                        <div className="h-3/4  w-3/4 bg-dark/90 rounded">                          
                            <SignUpForm setOpenModal={setOpenModal} id={id}/>
                        </div>
                    </div>
				</ModalOverlay>
			)}
		</>
	);
};

export default LoginModal;



