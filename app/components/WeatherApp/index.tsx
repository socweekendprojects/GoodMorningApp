import React from "react";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";

const WeatherApp = () => {

  type WeatherDataType = {
    temperature: string;
    feelsLike: string;
    description: string;
    icon: string;
  }

  const [weatherData, setWeatherData] = useState<WeatherDataType>();
  const [lat, setLat] = useState(10);
  const [lon, setLon] = useState(10);

  const url = `http://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.NEXT_PUBLIC_API_KEY}`;


  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        let x = position.coords.longitude;
        console.log("hello");
        console.log("long", x);
      });
    };

    console.log(lat, lon);
    fetchData();
    setWeatherData({
      temperature: `${Math.round(data.main.temp)}°C`,
      feelsLike: `${Math.round(data.main.feels_like)}°C`,
      description: `${data.weather[0].description}`,
      icon: `http://openweathermap.org/img/w/${data.weather[0].icon}@4x.png`,
    });
  }, [lat,lon]);

 
  const { data, error, loading } = useFetch(url);
  console.log("data", data);



  return <></>;
};

export default WeatherApp;

/*
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
    }

    await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}`)
      .then(res => res.json())
      .then(result => {
        setData( result)
        console.log(result);
      });
    }
  fetchData();
   }, [lat,long])

   return (
   <div className='App'> </div>
   );
   }

*/
