import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([]);
  
  const [people, setPeople] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (start && destination && date) {
      const train = { id: new Date().getTime().toString(), start, destination, date };
      console.log(train);
      setPeople((people) => {
        return [...people, train];
      });
      setStart('');
      setDestination('');
      
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
    <div>
      <p>BOOKINGS</p>
    </div>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='start'>Start : </label>
            <input
              type='text'
              id='start'
              name='start'
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='destination'>Destination : </label>
            <input
              type='destination'
              id='destination'
              name='destination'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='date'>Date : </label>
            <input
              type='date'
              id='date'
              name='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='passengers'>Passengers : </label>
            <input
              type='passengers'
              id='passengers'
              name='passengers'
            />
          </div>
          <button type='submit'>Search Train</button>
        </form>
        <div>
          <p>TRAINS AVAILABLE



          </p>
        </div>
        {people.map((train, index) => {
          const { id, start, destination, date, passengers } = train;
          return (
            <div className='item' key={id}>
              <p>{start}</p>
              <p>{destination}</p>
              <p>{date}</p>
              <p>{passengers}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
