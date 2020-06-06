/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback
  } from 'react-native';
import TrackPlayer, { usePlaybackState } from "react-native-track-player";


TrackPlayer.setupPlayer().then(async () => {
  TrackPlayer.add({
      id: "1",
      url: "http://ednixon.com:8170/stream",
      title: "KQBH",
      artist: "Unknown",
    })
  TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_STOP
    ],
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
    ]
  });
  }).catch(error => {
console.log('SETUP PLAYER', error)
})

  async function togglePlayback() {
    TrackPlayer.play().then(function(){
      console.log("Track play");
      });
   }

  async function getQueue() {
    console.log(await TrackPlayer.getQueue());
  }

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>KQBH</Text>
        <TouchableWithoutFeedback onPress={togglePlayback}>
          <View style={styles.button}>
            <Text>Play</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={{margin:40}}>
        </View>
        <TouchableWithoutFeedback onPress={getQueue}>
          <View style={styles.button}>
            <Text>Queue</Text>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
});

export default App;
