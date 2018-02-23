import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import cover from 'app/assets/cover.jpg';

const Background = ({children}) => (
  <View>
    <Image source={cover} style={styles.image} resizeMode="stretch"/>
  </View>
);

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%'
  }
});
export default Background;
