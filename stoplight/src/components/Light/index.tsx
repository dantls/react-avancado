import { ButtonHTMLAttributes } from 'react';
import {
  Container,
} from './styles';

type TypeProps = ButtonHTMLAttributes<HTMLButtonElement> &  {
  model: 'stop'| 'wait'|'go';
};

export function Light({model, ...rest }: TypeProps){
  return (
    <Container model={model} {...rest} />
  )
}