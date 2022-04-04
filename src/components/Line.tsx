import styled from 'styled-components';

export interface IStyledLine {
  fontSize?: string;
  color?: string | any;
}

const StyledLine = styled.div<IStyledLine>`
  font-size: 24px;
  color: ${(props) => props.color || 'white'};
`;

export const Line: React.FC<IStyledLine> = ({ ...props }) => {
  return <StyledLine {...props} />;
};
