/**
 * KQBH 101.5 is a Community-Built FM radio station with studios in Boyle Heights, Los Angeles.
 * https://www.lpfm.la/
 *
 * Mobile app developed by Joe Antongiovanni
 * https://github.com/jantongiovanni
 */

 /**
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
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
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from './react/screens/MainScreen';
import DetailScreen from './react/screens/DetailScreen';

const Stack = createSharedElementStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{

        }}
        >
        <Stack.Screen
          name = "MainScreen"
          component={MainScreen} />
        <Stack.Screen
          name = "DetailScreen"
          component={DetailScreen}
          options={navigation => ({
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};



const styles = StyleSheet.create({

});

export default App;
