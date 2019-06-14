import React, { Component } from 'react';

import { View, TouchableOpacity, Image } from 'react-native';

import Camera from '../assets/camera.png'

export default class Feed extends Component {
  static navigationOptions = {
    headerRight: (
      <TouchableOpacity style={{marginRight: 20}} onPress={() => { }}>
        <Image source={Camera}/>
      </TouchableOpacity>
    )
  }

  render() {
    return <View />
  }
}