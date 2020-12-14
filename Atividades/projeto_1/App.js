// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// import Cabecalho from './components/Cabecalho';
// import Corpo from './components/Corpo';
// import Disciplina from './components/Disciplina';

// const style = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'#336482',
//     justifyContent:'center',
//     alignItems:'center',
//     // marginTop:'10' isso não funciona
//   },
//   content:{
//     backgroundColor:'#333',
//   }
// })

// export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <Text>oi</Text>
//       </View>
//     );
//   };
// };

import React, {Component} from 'react';
import {View,StyleSheet} from 'react-native';

import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Disciplina from './components/Disciplina';

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#336482',
    justifyContent:'center',
    alignItems:'center',
    // marginTop:'10' isso não funciona
  },
  content:{
    backgroundColor:'#333',
  }
})

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Cabecalho style={style.content} nome="Erisson" curso="Design Digital" />
{/* porque a fonte não aumenta? */}
        <Corpo/>
        <Disciplina style={style.container} disciplina="Projeto técnico I" /> 
        <Disciplina disciplina="PIDM" />
        <Disciplina disciplina="Fotografia" />
      </View>
    );
  };
};