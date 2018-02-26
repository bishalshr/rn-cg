import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import cover from 'app/assets/cover.jpg';

const Background = ({ children }) => (
  <View style={{ flex: 1 }}>
    <View style={styles.overlay}>
      <Image source={cover} style={styles.image} resizeMode="stretch"/>
    </View>
    {children}
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red'
  },

  image: {
    height: '100%',
    width: '100%'
  }
});
export default Background;
