import React, { Component } from 'react';
import Data from './Data'
import Clock from './Clock'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        githubUsername: "",
        user: "",
    };
}

handleSubmit = event => {
  event.preventDefault();
  let url = `https://api.github.com/users/${this.state.githubUsername}`
  fetch(url, {
  })
      .then(response => response.json())
      .then(user => this.setState({ user, githubUsername: ""}));
  }

handleUsernameChange = event => {
  this.setState({
    githubUsername: event.target.value
  })
}

  render() {
    return (
      <div className="App">
          <Clock/>
           <form onSubmit={event => this.handleSubmit(event)}>
              <h2>...And time to enter a Github username</h2>
              <input type="text" name="githubUsername" onChange={event => this.handleUsernameChange(event)} value={this.state.githubUsername} />
          </form>
          <Data userInfo={this.state.user}/>
      </div>
    );
  }
}

export default App;
