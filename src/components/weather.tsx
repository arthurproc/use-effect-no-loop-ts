import { useCallback, useEffect, useState } from 'react';
import WeatherCard from './weather-card';
import { WeatherAPIResponse } from '../types';

function Weather() {
  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState(0);
  const [elevation, setElevation] = useState(0);
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  // Efeito para sempre que a localização alterar
  // O estado do componente ser modificado com a localização
  // Estamos sincronizando a renderização inicial do componente Weather
  // Com a execução do efeito abaixo
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      setCurrentPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });

    // cleanup
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };

    // o componente motar
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

  // fetchPosition com useCallback
  // const fetchPosition = useCallback(async () => {
  //   // console.log('executou a fetchPosition');
  //   const response = await fetch(
  //     `https://api.open-meteo.com/v1/forecast?latitude=${currentPosition.latitude}&longitude=${currentPosition.longitude}&current_weather=true`,
  //   );
  //   const weatherJson = await response.json() as WeatherAPIResponse;
  //   setTemperature(weatherJson.current_weather.temperature);
  //   setWind(weatherJson.current_weather.windspeed);
  //   setElevation(weatherJson.elevation);
  // }, [currentPosition]);

  return (
    <WeatherCard
      position={ currentPosition }
      temperature={ temperature }
      wind={ wind }
      elevation={ elevation }
    />
  );
}
export default Weather;
