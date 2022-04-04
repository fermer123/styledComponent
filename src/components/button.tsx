import styled, { css, keyframes } from 'styled-components';

interface IStyledButton {
  border?: string | 'none';
  padding?: string;
  fontSize?: number;
  cursor?: string;
  focus?: {
    outline?: string | null;
  };
  alignSelf?: string;
}

const rotateAnimation = keyframes`
0% {
  transform: rotateZ(0deg);
}
100% {
  transform: rotateZ(360deg);
}
`;

const StyledButton = styled.button.attrs((props) => ({
  outlined: true, // либо здесь либо где прокидыдваю пропсы
}))<IStyledButton>`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &: focus {
    outline: none;
  }

  align-self: ${(props) => props.alignSelf || 'stretch'};

  &: hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }

  ${(props: any) =>
    props.primary &&
    css`
      color: ${(props: any) => props.color || 'white'};
      background: ${(props: any) => props.background || 'white'};
    `}

  ${(props: any) =>
    props.outlined &&
    css`
      color: ${(props: any) => props.color || 'white'};
      border: 1px solid ${(props: any) => props.border || 'white'};
      background: transparent;
    `}
`;

const LargeButton = styled(StyledButton)`
  font-size: 32px;
`;

export const Button = ({ ...props }) => {
  return <StyledButton {...props} />;
};
