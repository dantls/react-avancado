import { ButtonHTMLAttributes } from 'react';
import {
  Container,
} from './styles';

type TypeProps = ButtonHTMLAttributes<HTMLButtonElement> &  {
  model: 'stop'| 'wait'|'go';
  isActive: boolean;
};

export function Light({model,isActive, ...rest }: TypeProps){
  return (
    <Container model={model} isActive={isActive} {...rest} />
  )
}