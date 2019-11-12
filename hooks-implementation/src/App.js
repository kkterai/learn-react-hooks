import React, { useState } from 'react';
import Data from './Data'
import Clock from './Clock'
import './App.css';

function App() {

  const [githubUsername, setGithubUsername] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const url = `https://api.github.com/users/${githubUsername}`
    fetch(url, {
    })
        .then(response => response.json())
        .then(user => setUser(user));
    }

  return (
    <div className="App">
      <Clock />
      <form onSubmit={event => handleSubmit(event)}>
          <h2>...And time to enter a Github username</h2>
          <input type="text" name="githubUsername" onChange={event => setGithubUsername(event.target.value)} value={githubUsername} />
      </form>
      <Data userInfo={user}/>
    </div>
  );
}

export default App;