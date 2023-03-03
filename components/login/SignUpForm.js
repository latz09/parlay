import { useRef, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

// create user--move out
async function createUser(email, password, displayName) {
	const response = await fetch('/api/auth/signup', {
		method: 'POST',
		body: JSON.stringify({
			email: email,
			password: password,
			displayName: displayName,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong!');
	}

	return data;
}

const SignUpForm = ({ setOpenModal, id }) => {
	const router = useRouter();
	const [isLogin, setIsLogin] = useState(true);
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const DisplayNameInputRef = useRef();

	
	

	async function submitHandler(e) {
		e.preventDefault();
		// validation
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;
		const enteredDisplayName = DisplayNameInputRef.current.value;
		const data = {
			redirect: false,
			email: enteredEmail,
			password: enteredPassword,
		};

		if (isLogin) {
			const result = await signIn('credentials', data);
			console.log(result);
			if (!result.error) {
				// set some auth state

				router.push(`/${id}`);
				// setOpenModal(false);
			}
		} else {
			try {
				const result = await createUser(
					enteredEmail,
					enteredPassword,
					enteredDisplayName
				);
				console.log(result);
				setIsLogin(true);
			} catch (error) {
				console.log(error);
				return;
			}
		}
	}

	return (
		<div className='grid'>
			<div
				className='px-4 text-3xl cursor-pointer place-self-end borer text-right'
				onClick={() => {
					setOpenModal(false);
				}}
			>
				x
			</div>
			<div className='text-3xl pb-4'>{isLogin ? 'Login' : 'Sign up'}</div>

			<form className='grid gap-4' onClick={submitHandler}>
				<div className='w-1/2 mx-auto grid gap-2'>
					<div className='grid gap-2 '>
						<label htmlFor='email' className='place-self-start'>
							Email
						</label>
						<input
							type='email'
							id='email'
							required
							ref={emailInputRef}
							className='bg-dark p-2 text-triary'
						/>
					</div>
					<div className={`${isLogin ? 'hidden' : 'grid gap-2'}`}>
						<label htmlFor='displayName' className='place-self-start'>
							Display Name
						</label>
						<input
							type='text'
							id='displayName'
							required
							ref={DisplayNameInputRef}
							className='bg-dark p-2 text-secondary'
						/>
					</div>
					<div className='grid gap-2 '>
						<label htmlFor='password' className='place-self-start'>
							Password
						</label>
						<input
							type='password'
							id='password'
							required
							ref={passwordInputRef}
							className='bg-dark p-2 text-triary'
						/>
					</div>
				</div>

				<button
					type='submit'
					className='btn w-1/2 mx-auto '
				>
					{isLogin ? 'Login' : 'Sign up'}
				</button>
			</form>

			<SignInorUpToggle setIsLogin={setIsLogin} isLogin={isLogin} />
		</div>
	);
};

export default SignUpForm;

const SignInorUpToggle = ({ setIsLogin, isLogin }) => {
	return (
		<div className='my-16'>
			<button
				className='border-b border-primary/50 animate-pulse pb-2 '
				onClick={() => {
					setIsLogin(!isLogin);
				}}
			>
				{!isLogin
					? 'Already have an account? Login here.'
					: 'Dont have an account? Sign up here.'}
			</button>
		</div>
	);
};
