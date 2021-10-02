
import { useState } from 'react';
import { Light } from '../Light';
import {
  Container,
  Content
} from './styles';

export function Spotlight(){

  const [active, setActive] = useState('')

  const TypeVariations = {
    stop: "Cuidado! Espere o sinal abrir",
    wait: "Atenção! Está preste a ficar vermelho",
    go: "Pode passar"
  }

  return (
    <Container>

      <Content>
        <Light 
          model="stop"
          onClick={() => setActive('stop')}
        />
       
        <Light 
          model="wait"
          onClick={() => setActive('wait')}
        />

        <Light 
          model="go"
          onClick={() => setActive('go')}
        />
       
        
      </Content>
      {
        (active === '') && <p>Clique e escolha</p>
      }
      {
        (active === 'stop') && <p>{TypeVariations['stop']}</p>
      }
      {
        (active === 'wait') && <p>{TypeVariations['wait']}</p>
      }
      {
        (active === 'go') && <p>{TypeVariations['go']}</p>
      }
    </Container>
  )
}