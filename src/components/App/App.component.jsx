import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import VideosProvider from '../../providers/Videos';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDescription from '../../components/VideoDescription';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <VideosProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <VideoDescription />
              </Route>
            </Switch>
          </Layout>
        </VideosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
