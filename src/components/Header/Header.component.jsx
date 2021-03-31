import React from 'react';
import { useHistory } from 'react-router';
import StyledHeader from './Header.styles';
import SearchInput from '../SearchInput';
import SwitchButton from '../SwitchButton';
import { Button, LinkButton } from '../Button';
import { useVideos } from '../../providers/Videos';
import { useAuth } from '../../providers/Auth';

function Header() {
  const { fetchVideos, darkTheme, setDarkTheme } = useVideos();
  const { authenticated, logout } = useAuth();
  const history = useHistory();

  const handleSearch = (search) => {
    fetchVideos(search);
    history.push('/');
  };

  return (
    <StyledHeader darkTheme={darkTheme}>
      {authenticated && <LinkButton label="Favorites" pathname="favorites/" />}
      <SearchInput data-testid="search-bar" search={handleSearch} />
      <SwitchButton
        data-testid="theme-switch-button"
        toggled={darkTheme}
        onChange={() => {
          setDarkTheme(!darkTheme);
        }}
      />
      {authenticated ? (
        <Button label="Logout" handleClick={logout} />
      ) : (
        <LinkButton label="Login" pathname="login" />
      )}
    </StyledHeader>
  );
}

export default Header;
