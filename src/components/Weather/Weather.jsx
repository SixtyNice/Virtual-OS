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
            icon: ""
        }
    }

    componentWillMount() {
        this.getWeather();
    }

    componentDidMount() {
        setInterval(this.getWeather, 1000);
    }

    getWeather() {
        let long;
        let lat;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;

                const proxy = 'https://cors-anywhere.herokuapp.com/';
                const api = `${proxy}https://api.darksky.net/forecast/06537ef473c5445e3349899fd3dac545/${lat},${long}`
                fetch(api)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        const { temperature, summary, icon } = data.currently;
                        let currentTemperature = ((temperature - 32) * 5 / 9).toFixed(1);
                        currentTemperature > 0 ? `+${currentTemperature}` : `- ${currentTemperature}`;
                        
                        this.setState({
                            temperature: currentTemperature,
                            timezone: data.timezone,
                            description: summary,
                            icon: icon.replace(/-/g, "_").toUpperCase()
                        })
                    })
            });
        }
    }



    render() {
        return (
            <div className="weather">
                <div className="temperature">
                    <div className="degree-section">
                        <h2 className="temperature-degree">{this.state.temperature}</h2>
                        <span>°</span>
                        <Skycons
                            color='white'
                            icon={this.state.icon}
                            autoplay={true}
                        />
                    </div>
                </div>
                <div className="location">
                    <h1 className='location-timezone'>{this.state.timezone}</h1>
                    <div className="temperature-description">{this.state.description}</div>
                </div>
            </div>
        )
    }
}
