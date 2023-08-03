import React, { useState, useEffect } from 'react';

const LifecycleLogger = () => {
  const [logMessages, setLogMessages] = useState([]);

  useEffect(() => {
    logMessage('componentDidMount');
    return () => {
      logMessage('componentWillUnmount');
    };
  }, []);

  useEffect(() => {
    logMessage('componentDidUpdate');
  }, [logMessages]);

  const logMessage = (message) => {
    setLogMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div>
      <button onClick={() => logMessage('Button Clicked')}>Click me!</button>
      <div>
        <h2>Console:</h2>
        {logMessages.map((message, index) => (
          <div key={index}>
            <hr />
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifecycleLogger;