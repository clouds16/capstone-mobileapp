import * as React  from 'react';
import {useState} from 'react'
import { StyleSheet , Button, TextInput , Image, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Line } from 'react-chartjs-2'
import YoutubePlayer from 'react-native-youtube-iframe';
import Chart from './components/chart'

export default function TabOneScreen({ navigation }:RootTabScreenProps<'TabFour'>) {

  return (
    <View style={styles.page}>
      <ScrollView > 
        

        <Text> Recent Achievements </Text>
        <Chart title="Weight over Time"  style={styles.container}  />

        <Text> Recent Achievements </Text>
        <Chart title="Arm workout in last month"  style={styles.container}  />

        <Text> Recent Achievements </Text>
        <Chart title="Bicep Workout"  style={styles.container}  />
        

        <Text> Recent Achievements </Text>
        <Chart title="Leg Workout"  style={styles.container}  />
        


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },


  container : {
    padding: 10 ,
    margin : 20 , 
    backgroundColor : 'white' ,
    color :  'black',
    height: 200, 
    borderRadius : 20
    
  },
  image: {
    height: 30,
    width: 30, 
    scale : .5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'rgba(255,255,255)'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});