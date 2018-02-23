import React from 'react';
import { View, Text } from 'react-native';

import Deck from 'app/utils/Deck';

import { compose, lifecycle } from 'recompose';
import Background from 'app/components/generics/Background';

const CallBreak = () => (
  <Background>
    <Text>hare rama</Text>
  </Background>
);

export default compose(
  lifecycle({
    componentWillMount() {
      let deck = new Deck();
      deck.newDeck();
      deck.shuffle();
      let players = { player1: [], player2: [], player3: [], player4: [] };
      for (let i = 0; i < 13; i++) {
        for (let j = 0; j < 4; j++) {
          players[`player${j+1}`].push(deck.dealCard());
        }
      }
    }
  })
)(CallBreak);
