import React,{useEffect,useState} from 'react';

const WeatherInfo = ({info}) => {
    const [weatheState,setWeatheState] = useState("");
    const {temp,humidity,pressure,speed,cityName,country,description,min_temp,max_temp, sunset}=info;
    
    useEffect(() => {
        if (description) {
          switch (description) {
            case "Clouds":
              setWeatheState("wi-day-cloudy");
              break;
            case "Mist":
              setWeatheState("wi-dust");
              break;
            case "Haze":
              setWeatheState("wi-fog");
              break;
            case "Clear":
              setWeatheState("wi-day-sunny");
              break;
    
            default:
              setWeatheState("wi-day-sunny");
              break;
          }
        }
      }, [description]);
        // converting the seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);//minilseconds mai convert hua
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
  return (<div>
  <article className='widget'>
        <div className='weatherIcon'>
            <i className={`wi ${weatheState}`}></i>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>
                    {description}
                </div>
                <div className='place'>{cityName},{country}</div>
            </div>
        
        </div>

        <div className='date'>{new Date().toLocaleString()}</div>

        <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><i className={"wi wi-sunset"}></i></p>
                        <p className='extra-info-leftside'>
                            {timeStr}PM<br />Sunset
                        </p>
  </div>

                    <div className='two-sided-section'>
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className='extra-info-leftside'>
                            {humidity}<br />Humidity
                        </p>
                    </div>
                </div>
                <div className='weather-extra-info'>
                    <div className='two-sided-section'>
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className='extra-info-leftside'>
                            {pressure}<br />Pressure
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className='extra-info-leftside'>
                            {speed}<br />Speed
                        </p>
                    </div>
                    
                </div>
            </div>
    </article>
  </div>
  );
};

export default WeatherInfo;