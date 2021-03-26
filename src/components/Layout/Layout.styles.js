import styled from 'styled-components';

const StyledMainContainer = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  background-color: ${(props) => (props.darkTheme ? '#000000e8' : ' white')};
  color: ${(props) => (props.darkTheme ? 'white' : ' #000000e8')};

  & a.home-link {
    color: ${(props) => (props.darkTheme ? 'white' : ' #000000e8')};
  }
`;

export default StyledMainContainer;
