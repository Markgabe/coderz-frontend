import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Routes from './routes';

import { AuthProvider } from './contexts/AuthContext';

import { GlobalStyles } from './styles/GlobalStyles';

const App = () => (
  <AuthProvider>
    <GlobalStyles />
    <ToastContainer />
    <Routes />
  </AuthProvider>
);

export default App;
