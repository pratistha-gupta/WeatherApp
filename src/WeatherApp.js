import React, { useState,useEffect } from 'react';
import "./style.css";
import WeatherInfo from './WeatherInfo';

// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=9ee72b0b7e1cdd7e9749ad2b08d7ec4a

const WeatherApp = () => {

    // state variable to get i/p city name
    const [cur,setCur] = useState("Kannauj");  
    const[info,setInfo] =useState({}); //passing an empty object
    const getInfo = async() => {
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cur}&units=metric&appid=9ee72b0b7e1cdd7e9749ad2b08d7ec4a`;
            // to get data in celcius : we used 'units=metric&' after &
            const res = await fetch(url);
            const data=  await res.json();
            console.log(data);
            //HTTPS K  BINA NI CHALEGA APNA API
             const {temp,humidity,pressure,temp_min:min_temp,temp_max:max_temp} = data.main;  //destructuring of nested object
            const{speed} = data.wind;
            const{name:cityName} = data;
            // initial name : final name
            const{country, sunset} = data.sys;
            const{main:description} = data.weather[0];
            const wInfo = {temp,humidity,pressure,speed,cityName,country,description
            ,min_temp,max_temp, sunset};
            //we need to add this data ina state variable
            setInfo(wInfo);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
      getInfo();
    //   we used useEffect and passed getInfo with emty array
    //   that means as we open this app our page get refreshed only once
    }, []);
    
  return <div>
    <div className='wrap'>
        <div className='search'>
        
            <input type='search'
            placeholder='Enter City Name'
            autoFocus
            id='search'
            className='searchTerm'
            value={cur}
            onChange={(e)=>setCur(e.target.value)}>
            
            </input>
            <div>
            <button className='searchButton' type='button' onClick={getInfo}>
                {/* <i className='fa-regular fa-magnifying-glass'></i> */}
                Search
            </button>
            </div>
        </div>


        
    </div>
    <WeatherInfo info={info}/>
    
  </div>;
};

export default WeatherApp;