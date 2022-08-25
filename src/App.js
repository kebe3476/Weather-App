import React, {useState} from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=89ad4ce3864adc644b46afa653093dd7`
  

   const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (

    <div className="app">
      <div className="search">
        <input 
          type="text" 
          value = {location}
          onChange = {event => setLocation(event.target.value)}
          onKeyPress = {searchLocation}
          placeholder = "Enter location"
        />
      </div>
      <div className="container">
        <div className='top'>
          <div className='location'>
            <h2>{data.name}</h2>
          </div>
          <div className='temperature'>
            {data.main ? <h1>{data.main.temp.toFixed()}°F </h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <h3>{data.weather[0].main}</h3> :null}
          </div>
        </div>


{data.name !== undefined &&
        <div className='bottom'>
        <div className='feels_like'>
          {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
          <p>Feels Like</p>
        </div>
        <div className='humidity'>
          {data.main ? <p>{data.main.humidity.toFixed()}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className='wind'>
          {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> :null}
          <p>Wind Speed</p>
        </div>
      </div>  
} 
        
      </div>
    </div>
  );
}

export default App;
