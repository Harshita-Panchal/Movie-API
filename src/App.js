import './App.css';
import { useEffect, useState } from 'react';
import Show from './component/show';
import ShowDetail from './component/showdetail';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  let navigate = useNavigate();

  const [show, setShow] = useState([])
  const [showDetails, setShowDetails] = useState('');
  const [bookBtn, setBookBtn] = useState('');

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((value) => value.json())
      .then((data) => {
        // console.log(data)
        setShow((data))
      })
  }, [])

  function Summary(id) {
    console.log("onclick", Summary, id)
    let object = show.find((item) => item.show.id === id);
    setShowDetails(object);
    navigate('/showdetail')
  }

  function Booking(id) {
    console.log("onclick", Summary, id)
    let object = show.find((item) => item.show.id === id);
    setBookBtn(object);
  }

  return (
    <div>

      <Routes>
        <Route path='/' element={<Show dataItem={show} Summary={Summary} />} />
        <Route path='/showdetail' element={<ShowDetail data={showDetails} booking={Booking} bookBtn={bookBtn} />} />
      </Routes>
    </div>
  );
}

export default App;