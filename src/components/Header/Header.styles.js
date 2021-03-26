import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${(props) => (props.darkTheme ? '#000000a6' : ' #882b3b')};
  height: 3.5rem;
  display: flex;
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.07);
  align-items: center;
  color: white;
  min-width: 500px;
`;

export default StyledHeader;
