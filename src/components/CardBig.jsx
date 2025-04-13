import getWeatherIcon from "./GetWeatherIcons";

function CardBig(prop) {
  if (!prop.currentDay || !prop.currentDay.weather) {
    return null;
  }
  const giorniDellaSettimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];

  function getNameDay(dateString) {
    const date = new Date(dateString);

    return giorniDellaSettimana[date.getDay()];
  }

  return (
    <div className="row mb-5 justify-content-center">
      <div className="col-md-6 col-lg-4">
        <div className="card weather-card text-white shadow-lg border- p-3">
          <img
            src={getWeatherIcon(prop.currentDay.weather[0].main)}
            alt={prop.currentDay.weather[0].description}
            className="card-img-top weather-icon mx-auto"
          />
          <div className="card-body text-center">
            <h5 className="card-title fs-3 fw-bold mb-3">
              {getNameDay(prop.currentDay.dt_txt)}
            </h5>
            <p className="card-text fs-5">
              🌡️ Temperatura: <strong>{prop.currentDay.main.temp}°C</strong>
            </p>
            <p className="card-text fs-6">
              🔻 Min: <strong>{prop.currentDay.main.temp_min}°C</strong> | 🔺
              Max: <strong>{prop.currentDay.main.temp_max}°C</strong>
            </p>
            <p className="card-text fst-italic text-capitalize">
              Condizioni: {prop.currentDay.weather[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardBig;
