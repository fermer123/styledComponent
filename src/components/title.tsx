import styled from 'styled-components';

interface Iprops {
  color: string;
}

const StyledTitle = styled.h1<Iprops>`
  color: ${(props) => props.color};
`;

export const Title: React.FC<Iprops> = ({ ...props }) => {
  return <StyledTitle {...props}></StyledTitle>;
};
