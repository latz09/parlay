import connectToDatabase from '../../helpers/mongodb';
import { ObjectId } from 'mongodb';

const DiscussionById = ({ discussion, id }) => {
	// console.log(discussion);
	return (
		<div className='grid place-items-center my-24 gap24'>
			<div>DISCUSSIONS PAGE</div>
			<div className='grid gap-2'>
				{discussion.topic}
			
			</div>
            {id}
		</div>
	);
};

export default DiscussionById;

export async function getServerSideProps({ params, req, res }) {
	const { discussionId } = params;
    

	// const discussionId = '63f56ffb3fcb69c17deb52a6'

	const client = await connectToDatabase;
	const db = client.db('Parlay');
	const collection = db.collection('discussions');
	const data = await collection.findOne({ _id: new ObjectId(discussionId) });

	return {
		props: { discussion: JSON.parse(JSON.stringify(data)), id: discussionId },
	};
}
