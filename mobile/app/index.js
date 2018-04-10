import React from 'react';
import { StatusBar, View } from 'react-native';

import { Provider } from 'react-redux';

import CallBreak from './components/CallBreak';

import store from './store';

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <StatusBar hidden/>
      <CallBreak/>
    </View>
  </Provider>
);

export default App;
