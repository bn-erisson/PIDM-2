import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Corpo extends Component{
  render(){
    let pic = {uri:'https://mir-s3-cdn-cf.behance.net/user/230/0ee5e456746153.5fd3a421ee847.jpg'};
      return (
        <Image source={pic} style={{width:113,height:150}}/>
      );
  };
}