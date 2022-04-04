import React, { Children } from 'react';
import styled from 'styled-components';
import { Title } from './components/title';
import { Flex } from './components/Flex';
import { Console } from './components/Console';
import { Button } from './components/button';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: black;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Flex justify='center'>
        <Title color='green'>Console cmd 2022. Smolin I.S.</Title>
      </Flex>
      <Flex flexDiretion='column' margin='10px 0px'>
        <Console color='green' />
        <Button color='green' outlined alignSelf='flex-end'>
          Dispatch
        </Button>
      </Flex>
    </AppWrapper>
  );
};
export default App;
