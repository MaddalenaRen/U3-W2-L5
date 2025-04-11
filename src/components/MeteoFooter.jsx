import React from "react";
function MeteoFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <h1 className="text-center fs-6">Meteo-{currentYear}</h1>
    </div>
  );
}

export default MeteoFooter;
