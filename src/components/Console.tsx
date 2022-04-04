import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from './Flex';
import { Line } from './Line';

interface IStyledConsole {
  width?: number;
  height?: number;
  background?: string;
  fontSize?: number;
  border?: string | 'none';
  resize?: string | 'none';
  color?: string | 'white';
  focus?: {
    outline: string | 'none';
  };
}

const StyledConsole = styled.textarea<IStyledConsole>`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${(props) => props.color || 'white'};
  &:focus {
    outline: none;
  }
`;

export const Console: React.FC<IStyledConsole> = ({ ...props }) => {
  const [lines, setLines] = useState<Array<string>>(['C/users/Smolin_I_S>/']);
  const onKeyPress = (e: any) => {
    if (e.charCode == 13) {
      setLines([...lines, 'C/users/Smolin_I_S>/']);
    }
  };
  return (
    <Flex>
      <Flex flexDiretion='column' margin={'0, 10px'}>
        {lines.map((el) => {
          <Line>{el}</Line>;
        })}
      </Flex>
      <StyledConsole onKeyDown={onKeyPress} {...props} />
    </Flex>
  );
};
