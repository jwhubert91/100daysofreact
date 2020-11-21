import React, { Component } from 'react';

class Timer extends Component {
  state = {
    now: 0,
    end: 0,
    daysLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0,
    secondsLeft: 0,
    message: '',
  };

  countdown() {
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    // timer function
    const countdownTimer = setInterval(() => {
      this.setState({ now: new Date().getTime() });
      // constants
      this.setState({ end: new Date('January 20, 2021 00:00:00').getTime() });
      const difference = this.state.end - this.state.now;

      if (difference < 0) {
        clearInterval(countdownTimer);
        this.setState({ message: 'Inauguration Day! 🎉' });
        return;
      }

      this.setState({ daysLeft: Math.floor(difference / days) });
      this.setState({ hoursLeft: Math.floor((difference % days) / hours) });
      this.setState({
        minutesLeft: Math.floor((difference % hours) / minutes),
      });
      this.setState({
        secondsLeft: Math.floor((difference % minutes) / seconds),
      });
    }, seconds);
  }

  componentDidMount() {
    this.countdown();
  }

  render() {
    // const { daysLeft, hoursLeft, minutesLeft, secondsLeft } = this.state;
    return (
      <div className='timer-container'>
        <p id='done'></p>
        <ul>
          <li>
            <span id='days'>{this.state.daysLeft}</span> Days
          </li>
          <li>
            <span id='hours'>{this.state.hoursLeft}</span> Hours
          </li>
          <li>
            <span id='minutes'>{this.state.minutesLeft}</span> Minutes
          </li>
          <li>
            <span id='seconds'>{this.state.secondsLeft}</span> Seconds
          </li>
        </ul>
      </div>
    );
  }
}

export default Timer;
