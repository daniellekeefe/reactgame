import React, { Component } from "react";
import moment from "moment"

class App extends Component {
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
          
        <h1>Hi its {moment().format("hh:mm")}</h1>
      )
  }
}
 export default App;