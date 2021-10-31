/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';

import Svg, { G, Circle } from "react-native-svg";
//import PiChart from "./helpers/PiChart";
import Pie from 'react-native-pie';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState('');
  const colorArr = '0123456789abcdef';
  const [segments, setSegments] = useState([
      {percentage: 100,
      color: '#bbb'},
      ]);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const add_segments = (num,pcts,cols) => {
      var toAdd = [];
      for (let i=0; i<num;i++){
          toAdd.push({percentage: pcts[i], color: cols[i]});
      }
      //Alert.alert("add:"+toAdd);
      setSegments(toAdd);
  }

  const gen_colour = () => {
      var r = Math.floor(Math.random()*15);
      var g = Math.floor(Math.random()*15);
      var b = Math.floor(Math.random()*15);
      return "#"+colorArr[r]+colorArr[g]+colorArr[b];
  }

  const build_pi = (str_segs) => {
      var segs = parseInt(str_segs);
      //Alert.alert("Str: "+str_segs+"\nInt: "+segs);
      if (isNaN(segs)){
          Alert.alert("That is not a number, please enter a valid number");
          return;
      }
      if (segs <= 0){
          Alert.alert("Please enter a positive non-zero number");
          return;
      }
      if (segs > 30){
          Alert.alert("Thats too many segments! You can have up to 30 segments.");
          return;
      }
      var total = 0;
      var all_segs = [];
      var colours = [];
      for (let i=0; i<segs-1;i++){
          var size = Math.floor(Math.random() * (100/segs)) + 1;
          total = total + size;
          all_segs.push(size);
          colours.push(gen_colour());
      }
      all_segs.push(100-total);
      colours.push(gen_colour());
      //Alert.alert('All_segs is '+all_segs+" and colours are "+colours);
      add_segments(segs,all_segs,colours);
  };



  return (
      <View style={styles.container}>
      <Pie
              radius={100}
              sections={segments}
              strokeCap={'butt'}
        />
        <View style={styles.bottom}>
        <Text>How many Pi segments do you want?</Text>
        <TextInput
            style={{height: 40}}
            placeholder="Type the number in here!"
            onChangeText={text => setText(text)}
        />
        <Button
            title="Create Chart!"
            onPress={()=>{build_pi(text)}}
        />
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  bottom:{
      flex:0.5,
      justifyContent: 'space-between',
  },
  container: {
    flex: 0.5,
    justifyContent: 'space-between',
    alignItems: "center",
  },
});

export default App;
