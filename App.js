import React from 'react';
import { StatusBar } from 'react-native';

import Login from './src/pages/Login/Login';
import {loginStyles} from './src/pages/Login/LoginStyles';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#191919"
      />

      <Login />
    </>
  );
};