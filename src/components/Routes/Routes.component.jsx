import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDescription from '../VideoDescription';
import FavoritesPage from '../../pages/Favorites';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import { useVideos } from '../../providers/Videos';
import FavoritesUtil from '../../utils/favoriteVideos';

export default function Routes() {
  const { videos } = useVideos();
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Private exact path="/secret">
          <SecretPage />
        </Private>
        <Private exact path="/favorites">
          <FavoritesPage />
        </Private>
        <Private path="/favorites/*">
          <VideoDescription relatedVideos={FavoritesUtil.getFavorites()} />
        </Private>
        <Route path="*">
          <VideoDescription relatedVideos={videos} />
        </Route>
      </Switch>
      {background && <Route path="/login" component={LoginPage} />}
    </>
  );
}
