import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions, View, StyleSheet, Text, Image, BackHandler, TouchableOpacity } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

import { SharedElement } from 'react-navigation-shared-element';
import Icon from 'react-native-vector-icons/Feather';

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
      <FadeInView style={{position:'absolute', top:40, left:10}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Icon name="arrow-left" color="white" style={{}} size={24}/>
        </TouchableOpacity>
      </FadeInView>
    </View>
  );
 };

 const styles = StyleSheet.create({

  });

  const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver:true
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default DetailScreen;
