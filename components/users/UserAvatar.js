import { useEffect, useState } from 'react';

const UserAvatar = ({ user }) => {
	const [neededUser, setNeededUser] = useState();

	useEffect(() => {
		fetch(`/api/users/id/${user}`)
			.then((res) => res.json())
			.then((data) => {
				setNeededUser(data);
			});
	}, [user]);

	if (!neededUser) {
		return <div>...</div>;
	}

	let displayName;

	if (neededUser.displayName !== '') {
		displayName = neededUser.displayName;
	} else if (neededUser.displayName === '') {
		displayName = neededUser.email;
	}

	return (
		<div>
			<Avatar displayName={displayName} email={neededUser.email} />
		</div>
	);
};

export default UserAvatar;

export const Avatar = ({ displayName, email }) => {
	return (
		<div className='flex  items-center space-x-2 font-questrial'>
			<span className='rounded-full px-6 py-4 text-primary font-extrabold uppercase bg-triary grid place-items-center '>
				{displayName[0]}
			</span>
			<div className='grid'>
				<span className='font-semibold'>{displayName}</span>
				<span className='text-sm tracking-wider opacity-80'>{email}</span>
			</div>
		</div>
	);
};
