import React, { useState } from 'react';
import useInterval from './hooks/useInterval';

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  // 每秒增加 count
  useInterval(
    () => setCount(prev => prev + 1),
    running ? 1000 : null // running=false 时暂停
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;