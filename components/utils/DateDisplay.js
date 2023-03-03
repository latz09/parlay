import { parseDateAndTime } from '../../helpers/parseDateAndTime';

const DateDisplay = ({ date }) => {
	const dateDisplay = parseDateAndTime(date);


	return (
        <div className=''>
            <span className=''>{dateDisplay}</span>
        </div>

	
	);
};

export default DateDisplay;
