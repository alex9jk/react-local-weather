import React, { Component } from 'react';
import Column from './Column';
import { CardGroup } from 'reactstrap';


let api = "https://fcc-weather-api.glitch.me/api/current?";


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            items: {},
        }
        //  this.componentDidMount = this.componentDidMount.bind(this);
        this.fetchWeather = this.fetchWeather.bind(this)
      
    }



    fetchWeather(apiStr) {
        fetch(apiStr)
            .then(res => res.json())
            .then(

                (result) => {
                  
               console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result.main,
                        name: result.name,
                        temp: result.main.temp,
                        humidity:result.main.humidity,
                        title: result.weather[0].main,
                        windSpeed:result.wind.speed,
                       
                        subTitle: result.weather[0].description

                    });
                    console.log(this.state);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                api += `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
                this.fetchWeather(api)
                console.log(this.state)
            })


        }
    }


    render() {
        return (
            <div id ={this.state.title}>
                <div>
                    <h1 id="currentLoc">{this.state.name}</h1>
                </div>
                <CardGroup id="group">
                <Column title={this.state.humidity} subTitle="Humidity"></Column>
                    <Column title={this.state.temp} subTitle="Temp"></Column>
                    
                    <Column title={this.state.windSpeed} subTitle="Wind Speed"></Column>
                </CardGroup>
            </div>
        )
    }
}

export default App;