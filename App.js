import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers/index';
import RouterComponent from './src/Router';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      storageBucket: '',
      messagingSenderId: '',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <RouterComponent />
      </Provider>
    );
  }
}
