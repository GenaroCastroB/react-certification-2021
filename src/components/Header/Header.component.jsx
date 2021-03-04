import React from 'react';
import StyledHeader from './Header.styles';
import SearchInput from '../SearchInput';
import SwitchButton from '../SwitchButton';
import Button from '../Button';
import { useVideos } from '../../providers/Videos';

function Header() {
  const { fetchVideos } = useVideos();

  return (
    <StyledHeader>
      <SearchInput data-testid="search-bar" search={fetchVideos} />
      <SwitchButton
        data-testid="theme-switch-button"
        toggled={false}
        onChange={() => {}}
      />
      <Button label="Login" />
    </StyledHeader>
  );
}

export default Header;
