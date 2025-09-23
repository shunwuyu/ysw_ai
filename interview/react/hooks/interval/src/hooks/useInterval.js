// - 封装
//   callback  fn
// - useEffect  remove 
import {
  useEffect,
  useRef
} from 'react';

function useInterval(callback, delay) {
  // 可改变对象
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback])

  // 添加定时器
  // 移除定时器
  useEffect(() => {
    if (delay === null) return;
    const tick = () => savedCallback.current();
    const id = setInterval(tick, delay);
    return () => clearInterval(id)
  }, [delay])
}

export default useInterval;
