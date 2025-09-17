import { Button as AntdButton } from 'antd';
// button type primary|default|text
import  type { ButtonType } from 'antd/es/button';

export interface ButtonProps {
  type: ButtonType;
  text: string;
}

const Button = ({ type, text }:ButtonProps) => {
  return (
    <AntdButton type={type}>{text}</AntdButton>
  )
}

export default Button;