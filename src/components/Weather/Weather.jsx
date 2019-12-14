import React, { Component } from 'react'
import './Weather.scss';
import Skycons from 'react-skycons';

export default class Weather extends Component {


    constructor(props) {
        super(props);

        this.state = {
            temperature: 0,
            timezone: 'Europe/Praga',
            description: "It's friggin cold",
            icon: "CLEAR_DAY"
        }
    }

    componentWillMount() {
        console.log("Будет")
        this.getWeather();
    }

    componentDidMount() {
        console.log("уже")

        // this.WeatherID = setInterval(this.getWeather, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.WeatherID);
    }

    getWeather() {
        let long;
        let lat;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                const proxy = 'https://cors-anywhere.herokuapp.com/';
                // const api = `${proxy}https://api.darksky.net/forecast/bb991e816b68e4fe560955bea5116bc5/${lat},${long}`
                fetch(api)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {

                        const { temperature, summary, icon } = data.currently;
                        let currentTemperature = Math.round(((temperature - 32) * 5 / 9));

                        this.setState({
                            temperature: currentTemperature > 0 ? `+ ${currentTemperature}` : `- ${currentTemperature}`,
                            timezone: data.timezone,
                            description: summary,
                            icon: icon.replace(/-/g, "_").toUpperCase() 
                        })
                    })
                    .catch(err=>{
                        console.log(err);
                        
                    })
            });
        }
    }




    render() {
        return (
            <div className="weather-wrapper">
                <section className="weather">
                    <div className="weather__temperature-section">
                        <div className="weather__degree">
                            <h2 className="weather__temperature">{this.state.temperature}</h2>
                            <span>°</span>
                        </div>

                        <Skycons className='weather__icon'
                            color='white'
                            icon={this.state.icon}
                            autoplay={true}
                        />

                    </div>
                    <div className="weather__location">
                        <div className='weather__timezone'>{this.state.timezone}</div>
                        <div className="weather__description">{this.state.description}</div>
                    </div>
                </section>
            </div>
        )
    }
}
