import './bookticket.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function BookTicket(props) {
    const { data } = props;

    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const afterbook = () => {
        if (localStorage.getItem('users') === null) {
            let userArr = []
            let userDetail = {
                email: email,
                number: number
            }
            userArr.push(userDetail)
            localStorage.setItem('users', JSON.stringify(userArr))
            navigate('/?bookticket=true')
        }
        else {
            let oldUserArr = JSON.parse(localStorage.getItem('users'))
            oldUserArr.forEach(Element => {
                // if user has already Booked ticket then show alert message
                if (Element.email === email && Element.number === number) {
                    // props.stateChange(true)
                    alert("Your ticket has already booked.")
                    navigate('/show')
                }
                // if user has not book ticket, then store user email password in oldUserArr
                else {
                    let userDetail = {
                        email: email,
                        number: number
                    }
                    oldUserArr.push(userDetail)
                    localStorage.setItem('users', JSON.stringify(oldUserArr))
                    navigate('/?bookticket=true')
                }
            })
        }

        // navigate('/')
    }
    return (
        <div className='container' >
            <h2>Book ticket for <span>{data?.show?.name}</span></h2>
            <div className="book-ticket">
                <div className="basic">
                    <div>
                        <p>runtime : {data?.show?.runtime}</p>
                        <p>Time: {data?.show?.schedule?.time}</p>
                    </div>
                    <div>
                        <p>Day: {data?.show?.schedule?.days}</p>
                        <p>language: {data?.show?.language}</p>
                    </div>
                </div>
                <div className='user-info' onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" required />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" autoComplete="off" required />
                    <label htmlFor="moblie">Mobile</label>
                    <input value={number} type="number" onChange={(e) => setNumber(e.target.value)} placeholder="Enter your number" required />
                </div>
                {localStorage.getItem('Email') && (
                    <div>
                        Email: <p>{localStorage.getItem('Email')}</p>
                    </div>
                )}
                {localStorage.getItem('number') && (
                    <div>
                        Password: <p>{localStorage.getItem('number')}</p>
                    </div>
                )}
            </div>
            <div className='bookdiv'>
                <button onClick={afterbook} className="book" >Book</button>
            </div>
        </div>
    )
}

export default BookTicket;