import { useEffect, useRef } from 'react';
import useInterval from './hooks/useInterval2';

function App() {
  const countRef = useRef(0);

  useEffect(() => {
    const clearInterval = useInterval(() => {
      countRef.current += 1;
      console.log('Count:', countRef.current);
    }, 1000);

    // 清理函数
    return () => clearInterval();
  }, []);

  return <div>Count: {countRef.current}</div>;
}

export default App;