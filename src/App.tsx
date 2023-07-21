// import Counter from './components/counter';
import { useState } from 'react';
import Weather from './components/weather';

function App() {
  const [renderizaWeather, setRenderizaWeather] = useState(true);

  return (
    <>
      {renderizaWeather && <Weather /> }
      <button
        onClick={ () => setRenderizaWeather(!renderizaWeather) }
      >
        Toggle Weather
      </button>
    </>
  );
}

export default App;
