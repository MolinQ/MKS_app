import { format } from 'date-fns';

function CurrentUtcTime() {
    const date = new Date();

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    const formatDate = format(date,'eeee, d MMMM yyyy')

    return(
        <div className='border w-25 p-2'>
        <p className='fw-bold'>
            Current UTC time : {`${hours} : ${minutes}`}
        </p>
            <pre>{formatDate}</pre>
        </div>
    )
}

export default CurrentUtcTime