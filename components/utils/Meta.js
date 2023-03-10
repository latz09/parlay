import Head from 'next/head';
import quickLogo from '../../public/images/quick-logo.png'
const Meta = ({ pageTitle, description, keywords }) => {
	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name='description' content={description} />
			<meta name="keywords" content={keywords} />
            <meta property="og:image" content={quickLogo} />
		</Head>
	);
};

export default Meta;  
