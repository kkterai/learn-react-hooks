import React from 'react'
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <ul className="clock">
          <li>Hello, Friend!  It is {this.state.date.toLocaleTimeString()}</li>
        </ul>
      );
    }
  }

  export default Clock;

  // Credit: Clock example in https://reactjs.org/docs/state-and-lifecycle.html