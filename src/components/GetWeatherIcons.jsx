function getWeatherIcon(condition) {
  switch (condition) {
    case "Clear":
      return "/weather-icons/animated/day.svg"; // cielo sereno
    case "Clouds":
      return "/weather-icons/animated/cloudy-day-1.svg"; // nuvoloso
    case "Rain":
      return "/weather-icons/animated/rainy-1.svg"; // pioggia
    case "Thunderstorm":
      return "/weather-icons/animated/thunder.svg"; // temporale
    case "Snow":
      return "/weather-icons/animated/snowy-1.svg"; // neve
    case "Drizzle":
      return "/weather-icons/animated/rainy-2.svg"; // pioggerellina
    case "Mist":
    case "Fog":
    case "Haze":
      return "/weather-icons/animated/cloudy.svg"; // nebbia
    default:
      return "/weather-icons/animated/cloudy.svg"; // icona di default
  }
}
export default getWeatherIcon;
