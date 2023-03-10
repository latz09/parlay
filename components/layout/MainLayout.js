import { ImMenu } from 'react-icons/im';
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../public/images/quick-logo.png';
import Image from 'next/image';

const MainLayout = ({ children }) => {
	const [user, setUser] = useState();
	const { data: session } = useSession();

	useEffect(() => {
		if (session) {
			fetch(`/api/users/${session.user.email}`)
				.then((res) => res.json())
				.then((data) => {
					setUser(data);
				});
		}
	}, [session]);

	return (
		<div className='flex flex-col'>
			<Navbar name={user ? user.displayName : null} />
			<main>{children}</main>
		</div>
	);
};

export default MainLayout;

const Navbar = ({ name }) => {
	function handleLogout() {
		// redirect to home page
		signOut({ callbackUrl: '/' });
	}

	return (
		<div className='mx-[10vw] flex justify-between items-center my-4'>
			<div className="grid gap-2">
				<Link href='/'>
					<Logo />
				</Link>
				<div className='font-oswald text-xl md:text-2xl opacity-80'>
					{name && <span>Welcome {name}</span>}
				</div>
			</div>

			<span className='text-2xl font-bold text-primary'>
				{name ? (
					<button
						onClick={handleLogout}
						className='text-2xl font-semibold text-primary'
					>
						Logout
					</button>
				) : (
					<div></div>
				)}
			</span>
		</div>
	);
};

const Logo = () => {
	return (
		// <div className='text-2xl lg:text-5xl   text-dark/70 rotate-3 font-oswald font-black hover:text-dark transition duration-700  '>
		// 	P
		// </div>
		<div className=''>
			<Image src={logo} alt='logo' width={100} height={100} />
		</div>
	);
};
