import styled, {css} from 'styled-components';

type TypeProps = {
  model: 'stop'| 'wait'|'go';
  isActive: boolean;
}

const TypeVariations = {
  stop: css`
    background-color: var(--red);
  `,
  wait: css`
     background-color: var(--yellow);
  `,
  go: css`
     background-color: var(--green);
  `,
};

export const Container = styled.button<TypeProps>`
  width: ${({isActive}) => isActive ? '5.2rem' : '5rem'};
  height: ${({isActive}) => isActive ? '5.2rem' : '5rem'};
  border-radius: 50%;
  margin: 0.2rem;
  ${({model}) => TypeVariations[model]}
  border: none;
`;
