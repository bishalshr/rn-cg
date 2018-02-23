import React from 'react';
import {View, Image} from 'react-native';

import cover from 'app/assets/cover.jpg';

const Background = ({children}) => (
  <View>
    <Image source={cover} style={{height: '100%', width: '100%'}} resizeMode="stretch"/>
  </View>
);

export default Background;
