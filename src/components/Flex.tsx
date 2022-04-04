import styled from 'styled-components';

interface IFlex {
  display?: string;
  flexDiretion?: string | 'row';
  alignItems?: string | 'stretch';
  justify?: string | 'stretch';
  margin?: string | 0;
}

const StyledFlex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${(props) => props.flexDiretion || 'row'};
  align-items: ${(props) => props.alignItems || 'strech'};
  justify-content: ${({ justify }) => justify || 'strech'};
  margin: ${({ margin }) => margin || 0};
`;
export const Flex: React.FC<IFlex> = ({ ...props }) => {
  return <StyledFlex {...props}></StyledFlex>;
};
