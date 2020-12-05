import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Corpo extends Component{
  render(){
    let pic = {uri:'https://mir-s3-cdn-cf.behance.net/user/276/4fabd856746153.5ac527b8ac12d.jpg'};
      return (
        <Image source={pic} style={{width:113,height:150}}/>
      );
  };
}
