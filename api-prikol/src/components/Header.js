import React from "react";
import Info from "./info";
import Form from "./form";
import Weather from "./Weather";

class Header extends React.Component {
  render() {
    const cities = this.props.weatherData.slice(0, 5); // Получаем первые 5 элементов массива

    return (
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <div className="header-info">
              <Info />
            </div>
            <div className="header-search">
              <Form weatherMethod={this.props.weatherMethod} />
            </div>
          </div>
          <div className="header-right">
            {cities.map((weather, index) => ( // Теперь используем map для рендеринга первых 5 элементов
              <div className="weather-box" key={index}>
                <Weather
                  temp={weather.temp}
                  city={weather.city}
                  country={weather.country}
                  pressure={weather.pressure}
                  sunset={weather.sunset}
                />
              </div>
            ))}
            {/* Добавляем вручную компоненты Weather в нужные div */}
            
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
