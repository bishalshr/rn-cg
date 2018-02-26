import React from 'react';
import {StatusBar, View} from 'react-native';
import CallBreak from './components/CallBreak';

const App = () => (
  <View style={{flex: 1}}>
    <StatusBar hidden/>
  <CallBreak/>
  </View>
);

export default App;
