import * as React from 'react';
import { Dimensions, View, StyleSheet, Text, Image } from 'react-native';

import { SharedElement } from 'react-navigation-shared-element';

const DetailScreen = props => {
const {width, height} = Dimensions.get('window');

const {data} = props.route.params

  return (
    <View style={{flex:1}}>
      <View>
        <SharedElement id={`item.${data.id}.photo`}>
          <Image
          resizeMode='cover'
          source={data.image}
          style={{width:width, height:width}}
          />
        </SharedElement>
      </View>
    </View>
  );
 };

export default DetailScreen;
