import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Weather from './components/Weather';
import Form from './components/form';


const API_KEY = 'abd7286aaa760f096197fd8fa46fecc6'

class App extends React.Component {

  state = {
    weatherData: [],
    cities: ['London', 'Paris', 'Berlin', 'Rome', 'Madrid'],
    error: undefined
  };
  
  componentDidMount() {
    this.setState({ weatherData: [] });
    this.state.cities.forEach(async (city) => {
      await this.gettingWeather({ target: { elements: { city: { value: city } } }  });
    });
  }

  gettingWeather = async (e) => {
    const city = e.target.elements.city.value;
  
    if (city) {
      try {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await api_url.json();
  
        const temp = Math.round(data.main.temp - 273.15);

        const sunset = new Date(data.sys.sunset * 1000);
        const sunsetTime = `${sunset.getHours()}:${sunset.getMinutes()}:${sunset.getSeconds()}`;
  
        this.setState({
          weatherData: [...this.state.weatherData, {
            temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunset: sunsetTime,
          }],
          error: undefined,
        });
      } catch (error) {
        this.setState({
          error: "Ошибка при получении данных о погоде",
        });
      }
    } else {
      this.setState({
        weatherData: [],
        error: undefined,
      });
    }
  };
  

  
  render() {
    return (
      <div className="App">
      <Header
        weatherMethod={this.gettingWeather}
        weatherData={this.state.weatherData}
        error={this.state.error}
      />
      <Main />
    </div>
    );
  }
}

export default App;