import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import ReduxAppContainer from './ReduxAppContainer';

export default function ReduxAppScreen() {
  return (
    <Provider store={store}>
      <ReduxAppContainer />
    </Provider>
  );
}
