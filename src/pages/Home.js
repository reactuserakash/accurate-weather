import React, { Component } from 'react';
import "./Home.css";
import axios from "axios";

//components
import Loader from "./../components/loader/Loader";
import windy from "./../icons/wi-windy.svg";
import humidity from "./../icons/wi-humidity.svg";
import barometer from "./../icons/wi-barometer.svg";
import Eachday from "./../components/eachday/Eachday";
import Weathericon from "./../components/weathericon/Weathericon";



class Home extends Component {
    state = {
        loading: true,
        data : {
            place : null,
            country: null,
            time: null,
            currentConditionImgCode : null,
            currentTemp : null,
            currentConditionType: null,
            forecast : null,
            wind: null,
            humidity: null,
            pressure : null
        }
    }

    componentDidMount() {
        /*var longitude = null;
        var latitude = null;
        var placeName = null
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords.longitude);
            console.log(position.coords.latitude);
            axios.get("http://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&sensor=true")
            .then(response => {
            console.log(response);
        })
        });*/
        
       axios.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kolkata%2C%20ak%22)%20and%20u%3D'c'&format=json")
       .then(response => {
           //console.log(response.data.query.results.channel);
           var tempData = {
            place : null,
            country: null,
            time: null,
            currentConditionImgCode : null,
            currentTemp : null,
            currentConditionType: null,
            forecast : null,
            wind: null,
            humidity: null,
            pressure : null
           };

           tempData.place = response.data.query.results.channel.location.city;
           tempData.country = response.data.query.results.channel.location.country;
           tempData.time = response.data.query.results.channel.item.pubDate;
           tempData.currentConditionImgCode = response.data.query.results.channel.item.condition.code;
           tempData.currentTemp = response.data.query.results.channel.item.condition.temp;
           tempData.currentConditionType = response.data.query.results.channel.item.condition.text;
           tempData.forecast = response.data.query.results.channel.item.forecast;
           tempData.wind = response.data.query.results.channel.wind.speed;
           tempData.humidity = response.data.query.results.channel.atmosphere.humidity;
           tempData.pressure = response.data.query.results.channel.atmosphere.pressure;
           this.setState({ data : tempData,loading: false });
            //console.log(tempData.currentConditionImgCode);
       })
    }

    findDataHandler = () => {
        this.setState({loading:true});
        var place = document.getElementById("place-holder").value;
        axios.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+place+"%2C%20ak%22)%20and%20u%3D'c'&format=json")
        .then(response => {
            //console.log(response.data.query.results.channel);
            var tempData = {
             place : null,
             country: null,
             time: null,
             currentConditionImgCode : null,
             currentTemp : null,
             currentConditionType: null,
             forecast : null,
             wind: null,
             humidity: null,
             pressure : null
            };
 
            tempData.place = response.data.query.results.channel.location.city;
            tempData.country = response.data.query.results.channel.location.country;
            tempData.time = response.data.query.results.channel.item.pubDate;
            tempData.currentConditionImgCode = response.data.query.results.channel.item.condition.code;
            tempData.currentTemp = response.data.query.results.channel.item.condition.temp;
            tempData.currentConditionType = response.data.query.results.channel.item.condition.text;
            tempData.forecast = response.data.query.results.channel.item.forecast;
            tempData.wind = response.data.query.results.channel.wind.speed;
            tempData.humidity = response.data.query.results.channel.atmosphere.humidity;
            tempData.pressure = response.data.query.results.channel.atmosphere.pressure;
            this.setState({ data : tempData,loading: false });
             //console.log(tempData.currentConditionImgCode);
        }).catch(err=> {
            window.alert("not found")
            this.setState({loading:  false});
        })
    }
    render() {
        var window = null;
        if(this.state.loading) {
            window = <Loader/>
        } else {
            //console.log(this.state.data.currentConditionImgCode);
            window = (
                <div>
                    <div className="search-section">
                        <input id="place-holder" type="text" placeholder="search other places" className="search-bar"/>
                        <button className="search-btn" onClick={this.findDataHandler}>Search</button>
                    </div>
                    <div className="place-time">
                        <p className="place-name">{this.state.data.place}, {this.state.data.country}</p>
                        <p className="time-date">{this.state.data.time}</p>
                    </div>
                    <div className="weather-information">
                        <div className="current-weather-icon-section">
                            <Weathericon condCode={this.state.data.currentConditionImgCode}/>
                        </div>
                        <div className="current-weather-info"> 
                            <p>{this.state.data.forecast[0].high}&#176; C - {this.state.data.forecast[0].low}&#176; C</p>
                            <p>{this.state.data.currentTemp}&#176; C</p>
                            <p>{this.state.data.currentConditionType}</p>
                        </div>
                        <div className="weather-list">
                            <ul className="next-days-list">
                                {
                                    this.state.data.forecast.map((eachday,index) =>{
                                        if (index <= 6) {
                                            return <Eachday key={eachday.date} condCode={eachday.code} day={eachday.day} high={eachday.high} low={eachday.low}/>
                                        } 
                                       return null;
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="other-weather-info">
                        <ul>
                            <li>
                                <img className="whp-icons" src={windy} alt="wind"/>
                                <p>{this.state.data.wind} Kmph</p>
                                <p>Wind</p> 
                            </li>
                            <li>
                                <img className="whp-icons" src={humidity} alt="humidity"/>
                                <p>{this.state.data.humidity} %</p>
                                <p>Humidity</p>
                            </li>
                            <li>
                                <img className="whp-icons" src={barometer} alt="pressure"/>
                                <p>{this.state.data.pressure} mb</p>
                                <p>Pressure</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer">
                        <p>Copyright 2018 by Accurate Weather.</p>
                        <p>All Rights Reserved.</p>
                        <p>Made by <b>Akash Debnath</b></p>
                    </div>
                </div>
            )
        }
        return (
            <div className="Home">
                {window}
            </div>
        );
    }
}

export default Home;