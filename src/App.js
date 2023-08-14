import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dish from './Dishess/Dishes';
import time from './Assets/Set_time-01@2x.jpg'
import date from './Assets/Select_date-01@2x.jpg'

function App() {
  const [Dishes, setDishes] = useState([])
  const [DishesList, setDishesList] = useState([])
  useEffect(() => {
    axios.get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/').then(res => {

      setDishes(res.data.popularDishes)
     
      setDishesList(res.data.dishes)
    }).catch(err => {
      console.log(err.message)
    })
  }, [])
  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-12 d-flex mt-4'>
          <h3 className="font heading-text">
                <span className="material-symbols-outlined">
                    arrow_back_ios_new
                </span>Select Dishes
            </h3>
        </div>
        <div className="col-sm-12 col-xs-12 col-md-12 mt-2" style={{ backgroundColor: 'black', width: '100%', height: '60px' }}></div>
        <div className='card  mt-4 d-flex justify-content-around flex-row align-items-center  content ' >
          <div className='d-flex align-items-center' >
            <img className='timedateimg' alt='calendar' src={date}></img>
            <span className='timedate'> 13 AUG 2023</span>
          </div>
          {/* <div style={{ borderRight: "2px solid #ddd ", height: "45px", }}></div> */}
          <div className='separator'></div>
          <div className='d-flex align-items-center' >
            <img className='timedateimg' alt='time' src={time}></img>
            <span className=' timedate'>10:30 Pm-12:30 Pm</span>
          </div>
        </div>
        <div className='buttonslist'>
          <div className='d-flex  justify-content-between' style={{ marginLeft: "20px", gap: "10px", scrollbarWidth: "none" }}>
            <button className='btn btn-outline-secondary rounded-pill btnn selected'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn '>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
            <button className='btn btn-outline-secondary rounded-pill btnn'>Italian</button>
          </div>
        </div>
        <h3 className='mt-4 ms-4 col-8'>Popular Dishes</h3>
        <div style={{ width: "99vw", overflow: "auto" }}>
          <div className='d-flex mt-4 justify-content-between ' style={{ marginLeft: "30px", gap: "15px", scrollbarWidth: "none" }}>
            {Dishes?.map(res => (
              <React.Fragment key={res.id}>
                {/* <span className='image' style={{
                  backgroundImage: `url(${res.image})`, height: "75px",
                  width: "80px"
                }}>Biryani</span> */}
                <img alt='fooditem' src={res.image} className=' image'  ></img>
                <img alt='fooditem' src={res.image} className=' image' ></img>
                <img alt='fooditem' src={res.image} className='image' ></img>
                {/* <img alt='' src={res.image} className=' image' ></img> */}
              </  React.Fragment>
            ))}
          </div>
        </div>
        <hr className='mt-4 border border-4'></hr>
        <Dish className="col-12" data={[Dishes, DishesList]}></Dish>
      </div>
    </div>

  );
}

export default App;
