import * as React from 'react';
import { Image, FlatList, Dimensions, View, StyleSheet, Text } from 'react-native';

import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';

import { dummydata } from '../DummyData';

const MainScreen = ({navigation}) => {

const {width, height} = Dimensions.get('window');
return (
  <View style = {{flex:1}}>
    <View>
      <FlatList
      data = {dummydata}
      keyExtractor = {(item, index) => index.toString()}
      renderItem = {({item}) => {
        return (
          <View>
            <View>
             <TouchableScale
             activeScale={0.9}
             tension={50}
             friction={7}
             useNativeDriver
             onPress={() => navigation.navigate('DetailScreen',{data: item})}
             >
               <SharedElement id={`item.${item.id}.photo`}>
                <Image
                source={item.image}
                style={{width: width, height: width}}
                />
               </SharedElement>
             </TouchableScale>
            </View>
          </View>
        )
      }}
      />
  </View>
</View>
)
}

export default MainScreen;
