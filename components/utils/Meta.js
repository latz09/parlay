import Head from 'next/head';

const Meta = ({ pageTitle, description, keywords }) => {
	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name='description' content={description} />
			<meta name="keywords" content={keywords} />
		</Head>
	);
};

export default Meta;  
