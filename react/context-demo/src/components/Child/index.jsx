import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
// use
// 函数
// 响应式状态和生命周期 
// 很好用
const Child = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
      Child {theme}
    </div>
  )
}

export default Child