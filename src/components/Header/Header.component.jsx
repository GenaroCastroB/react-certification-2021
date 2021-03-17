import React from 'react';
import { useHistory } from 'react-router';
import StyledHeader from './Header.styles';
import SearchInput from '../SearchInput';
import SwitchButton from '../SwitchButton';
import Button from '../Button';
import { useVideos } from '../../providers/Videos';

function Header() {
  const { fetchVideos, darkTheme, setDarkTheme } = useVideos();
  const history = useHistory();

  const handleSearch = (search) => {
    fetchVideos(search);
    history.push('/');
  }

  return (
    <StyledHeader darkTheme={darkTheme}>
      <SearchInput data-testid="search-bar" search={handleSearch} />
      <SwitchButton
        data-testid="theme-switch-button"
        toggled={darkTheme}
        onChange={() => {setDarkTheme(!darkTheme)}}
      />
      <Button label="Login" />
    </StyledHeader>
  );
}

export default Header;
