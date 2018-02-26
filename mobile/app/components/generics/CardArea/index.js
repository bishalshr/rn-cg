import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

const CardArea = () => (
  <View style={styles.container}>
    <View style={styles.subContainer}>
      <View style={styles.cardContainer}>
        <Image source={require('app/assets/1.gif')} style={styles.card} resizeMode="stretch"/>
        <Image source={require('app/assets/2.gif')} style={[styles.card, {left: 20}]} resizeMode="stretch"/>
        <Image source={require('app/assets/4.gif')} style={[styles.card, {left: 40}]} resizeMode="stretch"/>
        <Image source={require('app/assets/5.gif')} style={[styles.card, {left: 60}]} resizeMode="stretch"/>
        <Image source={require('app/assets/23.gif')} style={[styles.card, {left: 80}]} resizeMode="stretch"/>
        <Image source={require('app/assets/42.gif')} style={[styles.card, {left: 100}]} resizeMode="stretch"/>
      </View>
    </View>
  </View>
);

export default CardArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    width: '100%'
  },

  cardContainer: {
    width: 175,
    flexDirection: 'row',
  },

  card: {
    height: 90,
    width: 75,
    position: 'absolute'
  },

  subContainer: {
    alignItems: 'center',
    height: 120
  }
});
