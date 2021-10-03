
import { useState } from 'react';
import { Light } from '../Light';
import {
  Container,
  Content,
  Info
} from './styles';

export function Spotlight(){

  const [active, setActive] = useState<'stop'| 'wait'| 'go'>()

  function getMessage(type: 'stop'| 'wait'| 'go'){
    const TypeVariations = {
      stop: "Cuidado! Espere o sinal abrir",
      wait: "Atenção! Está preste a ficar vermelho",
      go: "Pode passar"
    }

    return TypeVariations[type] 
  }

  return (
    <Container>

      <Content>
        <Light 
          model="stop"
          onClick={() => setActive('stop')}
          isActive={active === 'stop'}
        />
       
        <Light 
          model="wait"
          onClick={() => setActive('wait')}
          isActive={active === 'wait'}
        />

        <Light 
          model="go"
          onClick={() => setActive('go')}
          isActive={active === 'go'}
        /> 
      </Content>
      <Info>
        {!!active && getMessage(active)}
      </Info>
    </Container>
  )
}