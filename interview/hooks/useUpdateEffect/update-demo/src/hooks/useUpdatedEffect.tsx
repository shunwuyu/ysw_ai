import {
  useEffect, 
  useRef
} from 'react';

function useUpdatedEffect(effect: React.EffectCallback, deps: React.DependencyList) {
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      // 第一次执行
      isFirst.current = false;
      return ;
    }
    return effect();
  }, deps)
}

export default useUpdatedEffect;