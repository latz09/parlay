import Link from 'next/link';

const ButtonLink = ({ title, href }) => {
	return (
		<div className=" grid place-items-center text-xl my-2 text-primary font-bold tracking-widest opacity-90">
			<Link href={href}>
				<span className="btn bg-triary"> {title} discussions</span>
			</Link>
		</div>
	);
};

export default ButtonLink;
