// 自定义hooks 
// hooks + component renderer
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export function useTheme() {
  return useContext(ThemeContext)
}