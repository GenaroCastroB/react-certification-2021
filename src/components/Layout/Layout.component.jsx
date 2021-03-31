import React from 'react';
import Header from '../Header';
import StyledMainContainer from './Layout.styles';
import { useVideos } from '../../providers/Videos';

function Layout({ children }) {
  const { darkTheme } = useVideos();

  return (
    <>
      <Header />
      <StyledMainContainer className="container" darkTheme={darkTheme}>
        {children}
      </StyledMainContainer>
    </>
  );
}

export default Layout;
