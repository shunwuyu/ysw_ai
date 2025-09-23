import { useState } from 'react';
import useUpdatedEffect  from './hooks/useUpdatedEffect';

export default function App() {
  const [count, setCount] = useState<number>(0);
  useUpdatedEffect(() => {
    console.log('count updated', count);
  }, [count])
  return (
    <div style={{padding: 20}}>
      <h1>useUpdatedEffect</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}