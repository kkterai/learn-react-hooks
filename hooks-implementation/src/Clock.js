import React, { useState, useEffect } from 'react';
import './Clock.css'

function Clock() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    },[]);
  
    return (
        <ul className="clock">
          <li>Hello, Friend!  It is {date.toLocaleTimeString()}</li>
        </ul>
    );
  }
  
  export default Clock;
