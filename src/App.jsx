import { useEffect, useState } from "react";
import TopButton from "./components/topButton.component";
import Inputs from "./components/input.component";
import TimeLocation from "./components/timeLocation.component";
import TempDetails from "./components/tempDetail.component";
import ForeCast from "./components/forecast.component";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "New Delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-lg py-5 px-4 sm:px-8 lg:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeLocation weather={weather} />
          <TempDetails weather={weather} />
          <ForeCast title="3-hour forecast" data={weather.hourly} />
          <ForeCast title="daily forecast" data={weather.daily} />
        </>
      )}
    </div>
  );
};

export default App;
