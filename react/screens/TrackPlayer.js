// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
// import 'react-native-gesture-handler';
// import React, { useEffect } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TouchableWithoutFeedback
//   } from 'react-native';
// import TrackPlayer, { usePlaybackState } from "react-native-track-player";
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
// import { NavigationContainer } from '@react-navigation/native';
//
// const Stack = createSharedElementStackNavigator();
//
//
//
//
// //const playbackState = usePlaybackState();
// //useEffect(() => {
//    start();
//  //}, []);
//
// async function start() {
//   console.log("start");
//   TrackPlayer.setupPlayer().then(async () => {
//     TrackPlayer.add({
//         id: "1",
//         url: "http://ednixon.com:8170/stream",
//         title: "KQBH",
//         artist: "Unknown",
//       })
//     TrackPlayer.updateOptions({
//       stopWithApp: true,
//       capabilities: [
//         TrackPlayer.CAPABILITY_PLAY,
//         TrackPlayer.CAPABILITY_STOP,
//         TrackPlayer.CAPABILITY_PAUSE,
//       ],
//       compactCapabilities: [
//         TrackPlayer.CAPABILITY_PLAY,
//         TrackPlayer.CAPABILITY_STOP,
//         TrackPlayer.CAPABILITY_PAUSE,
//       ]
//     });
//     }).catch(error => {
//   console.log('SETUP PLAYER', error)
//   })
// }
//
//   async function togglePlayback() {
//     if(TrackPlayer.getQueue()){
//     console.log("station is queued and ready to play");
//     TrackPlayer.play().then(function(){
//       console.log("Track play");
//       });
//     } else {
//       console.log("station is not queued and needs to be set up");
//     }
//    }
//
//   async function getQueue() {
//     console.log(await TrackPlayer.getQueue());
//   }
//
// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <Text>KQBH</Text>
//         <TouchableWithoutFeedback onPress={togglePlayback}>
//           <View style={styles.button}>
//             <Text>Play</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <View style={{margin:40}}>
//         </View>
//         <TouchableWithoutFeedback onPress={getQueue}>
//           <View style={styles.button}>
//             <Text>Queue</Text>
//           </View>
//         </TouchableWithoutFeedback>
//       </SafeAreaView>
//     </>
//   );
// };
//
// function getStateName(state) {
//   switch (state) {
//     case TrackPlayer.STATE_NONE:
//       return "None";
//     case TrackPlayer.STATE_PLAYING:
//       return "Playing";
//     case TrackPlayer.STATE_PAUSED:
//       return "Paused";
//     case TrackPlayer.STATE_STOPPED:
//       return "Stopped";
//     case TrackPlayer.STATE_BUFFERING:
//       return "Buffering";
//   }
// }
//
// const styles = StyleSheet.create({
//   button: {
//       alignItems: "center",
//       backgroundColor: "#DDDDDD",
//       padding: 10
//     },
// });
//
// export default App;
