function getWeatherIcon(condition) {
  switch (condition.toLowerCase()) {
    case "clear":
      return "/weather-icons/clear-day.svg";
    case "clouds":
      return "/weather-icons/cloudy.svg";
    case "rain":
      return "/weather-icons/rain.svg";
    case "thunderstorm":
      return "/weather-icons/thunderstorm.svg";
    case "snow":
      return "/weather-icons/snow.svg";
    case "fog":
      return "/weather-icons/fog.svg";
    case "wind":
      return "/weather-icons/wind.svg";
    default:
      return "/weather-icons/clear-day.svg"; // fallback
  }
}

export default getWeatherIcon;
