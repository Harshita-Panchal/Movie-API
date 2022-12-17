import BookTicket from './bookticket'
import './showdetail.css'

function ShowDetail(props) {
    const { data } = props;

    return (
        <div className='detail'>
            <h1>Summary of <span>{data?.show?.name}</span></h1>
            <div className='show-detail'>
                <div>
                    <img src={data?.show?.image?.medium} className="img" alt="test" />
                </div>
                <div>
                    <p>{data?.show?.summary}</p>
                    <p>genres : {data?.show?.genres}</p>
                    <p>status : {data?.show?.status} </p>
                    <button onClick={() => props.booking(data?.show?.id)} >Book Ticket</button>
                </div>
            </div>
            <div>
                <BookTicket data={props.bookBtn} />
            </div>
        </div>
    )

}

export default ShowDetail;