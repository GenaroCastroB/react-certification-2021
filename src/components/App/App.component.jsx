import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import VideosProvider from '../../providers/Videos';
import Layout from '../Layout';
import Routes from '../Routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <VideosProvider>
          <Layout>
            <Routes />
          </Layout>
        </VideosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
