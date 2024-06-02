import React from "react";
import Info from "./info";
import Form from "./form";
import Weather from "./Weather";

class Header extends React.Component {
  render() {
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
          {this.props.city && (
            <div className="header-right"> 
              <Weather
                temp={this.props.temp}
                city={this.props.city}
                country={this.props.country}
                pressure={this.props.pressure}
                sunset={this.props.sunset}
                error={this.props.error}
              />
            </div> 
          )}
          <div className="weather-box">Box 1</div>
          <div className="weather-box">Box 2</div>
          <div className="weather-box">Box 3</div>
          <div className="weather-box">Box 4</div>
        </div>
      </header>
    );
  }
}

export default Header;
