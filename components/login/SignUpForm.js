
import { useRef, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

// create user--move out
async function createUser(email, password, id) {
	const response = await fetch('/api/auth/signup', {
		method: 'POST',
		body: JSON.stringify({
			email: email,
			password: password,
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
	const [isLogin, setIsLogin] = useState(false);
	const emailInputRef = useRef();
	const passwordInputRef = useRef();


	async function submitHandler(e) {
		e.preventDefault();
		// validation
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		const data = {
			redirect: false,
			email: enteredEmail,
			password: enteredPassword,
		};

		if (isLogin) {
			const result = await signIn('credentials', data);
			console.log(result, )
			if (!result.error) {
				// set some auth state
				setOpenModal(false);
				router.push(`/${id}`);
				
			}
		} else {
			try {
				const result = await createUser(enteredEmail, enteredPassword);
				console.log(result);
			} catch (error) {
				console.log(error);

				return;
			}
		}
	}

	return (
		<div>
			<div
				className='my-4 text-3xl cursor-pointer'
				onClick={() => {
					setOpenModal(false);
				}}
			>
				close
			</div>

			<div className="flex items-center w-full ">
				<button
					className={`p-4 bg-triary text-dark ${
						isLogin ? 'text-white' : 'text-primary'
					}`}
					onClick={() => {
						setIsLogin(false);
					}}
				>
					Sign up
				</button>
				<button
					className={`p-4 bg-triary text-dark ${
						isLogin ? 'text-primary' : 'text-white'
					}`}
					onClick={() => {
						setIsLogin(true);
					}}
				>
					Login
				</button>


				

			</div>

			<form className='grid gap-4 place-items-center' onClick={submitHandler}>
				<div className='flex space-x-8'>
					<label htmlFor='email'>Your Email</label>
					<input type='email' id='email' required ref={emailInputRef} />
				</div>
				<div className='flex space-x-8'>
					<label htmlFor='password'>Your Password</label>
					<input
						type='password'
						id='password'
						required
						ref={passwordInputRef}
					/>
				</div>
				<div className='flex space-x-8'>
					<button type='submit' className='p-4 bg-triary text-dark'>
						{isLogin ? 'Login' : 'Sign up'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
