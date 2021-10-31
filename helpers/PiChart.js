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

const PiChart = ({}) => {
    return (
        <View style={styles.circle}>
        </View>
        )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
  height: 150,
  width: 150,
  borderRadius: 150/2,
  backgroundColor: 'blue',
  paddingBottom: 25,

}

});

export default PiChart;
