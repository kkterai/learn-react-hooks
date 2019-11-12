import React, { useState, useEffect } from 'react';

function Clock() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    },[]);
  
    return (
        <div className="clock">
          <h1>Hello, Friend!</h1>
          <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
    );
  }
  
  export default Clock;
