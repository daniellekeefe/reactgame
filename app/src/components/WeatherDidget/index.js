import React, { Component } from "react";
import moment from "moment"
import "./style.css";

class Weather extends Component {
  // Setting this.state.movies to the cards json array
  state = {
    
  };
  componentDidMount(){
      let position;
    navigator.geolocation.getCurrentPosition(pos=>position=pos)
       //use axios or fetch to hit a weather api for the location 
  }

  //weather
    //get loication
        //navigator.geolocation.getCurrentPosition()
    //hit up an api

    //display som stuff
  render(){
      return (
        <div classs="time">
          
        Local Time is {moment().format("hh:mm")}
        </div>
      )
  }
}
 export default Weather;