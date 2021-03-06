import React from 'react';
import { Image, FlatList, Dimensions, View, StyleSheet, Text, TouchableWithoutFeedback, BackHandler } from 'react-native';

import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';

import { dummydata } from '../DummyData';

const MainScreen = ({navigation}) => {

const {width, height} = Dimensions.get('window');

return (
  <View style = {{flex:1, padding:10}}>
    <FlatList
    numColumns = {2}
    data = {dummydata}
    keyExtractor = {(item, index) => index.toString()}
    renderItem = {({item}) => {
      return (
        <View style={{flex:1, margin: 10}}>
         <TouchableScale
         activeScale={0.9}
         tension={50}
         friction={7}
         useNativeDriver
         onPress={() => navigation.navigate('DetailScreen',{data: item})}
         >
           <SharedElement id={`item.${item.id}.photo`}>
            <Image
            resizeMode='cover'
            source={item.image}
            style={{width: (width-60)/2, height: (width-60)/2, borderRadius: width/2, justifyContent: 'center', alignItems: 'center'}}
            />
           </SharedElement>
         </TouchableScale>
        </View>
      )
    }}
    />
  </View>
)
}

export default MainScreen;
