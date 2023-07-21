import { useState, useEffect } from 'react';
import WeatherCard from './components/weather-card';
import { WeatherAPIResponse } from './types';

function App() {
  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState(0);
  const [elevation, setElevation] = useState(0);
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      setCurrentPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  useEffect(() => {
    const fetchPosition = async () => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${currentPosition.latitude}&longitude=${currentPosition.longitude}&current_weather=true`,
      );
      const weatherJson = await response.json() as WeatherAPIResponse;
      setTemperature(weatherJson.current_weather.temperature);
      setWind(weatherJson.current_weather.windspeed);
      setElevation(weatherJson.elevation);
    };
    fetchPosition();
  }, [currentPosition]);

  return (
    <WeatherCard
      position={ currentPosition }
      temperature={ temperature }
      wind={ wind }
      elevation={ elevation }
    />
  );
}

export default App;
