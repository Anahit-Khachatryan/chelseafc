import React, { Component } from 'react';


class Clock extends React.Component {
    constructor() {
      super();
      this.state = {
          deadline: 'March 30, 2019 11:00:00', 
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
       };
      // 
    }
    componentWillMount(){
        this.getTimeUntil(this.state.deadline);
    }
    componentDidMount() {
      setInterval(() => this.getTimeUntil(this.state.deadline),1000)
    }
     leading0(num){
         return num <10 ? '0'+ num : num;
     }
    getTimeUntil(deadline){
      const time = Date.parse(deadline) - Date.parse(new Date());
      const days = Math.floor(time/(1000*60*60*24));
      const hours = Math.floor(time / (1000*60 * 60)%24);
      const minutes = Math.floor((time/1000/60)%60);
      const seconds = Math.floor((time /1000)%60);
      this.setState({days, hours, minutes, seconds});
    }
  

    render() {
      return(
        <ul className="timeCircles">
         <li><p>{this.leading0(this.state.days)}</p> <span>days</span></li>
         <li><p>{this.leading0(this.state.hours)}</p><span> hours</span></li>
         <li><p>{this.leading0(this.state.minutes)}</p> <span>minutes</span></li>
         <li><p>{this.leading0(this.state.seconds)}</p><span> seconds</span></li>

        </ul>
      );
    }
  }
  
  
export default Clock;