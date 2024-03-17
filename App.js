import MovieList from './components/MovieList/MovieList';
import React from 'react';
import AppNavigator from './components/AppNavigator/AppNavigator';
import { store } from './Redux/Store';
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}


