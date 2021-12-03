import * as React  from 'react';
import {useState} from 'react'
import { StyleSheet , Button, TextInput , Image, ScrollView, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Line } from 'react-chartjs-2'
import YoutubePlayer from 'react-native-youtube-iframe';
import Chart from './components/chart'
import WorkoutChart from './components/workoutcharts'

export default function TabOneScreen({ navigation }: any) {


  const musclegroups = ['chest' , 'arms' , 'triceps' , 'biceps' , 'legs' , 'core' , 'abs' , 'shoulders' , 'back']

  return (

      <ScrollView > 
        

        <Text> Recent Achievements </Text>
        <Chart title="Weight over Time"  style={styles.container}  />

        {
          musclegroups.map( (item)=> {
  
            return (
              <>  
              
              <Text> {item} Workouts by Force </Text>
              <WorkoutChart title= { {item} + " : Force over Time"} style={styles.container} musclegroup= {item}  />
              
              </>
            )
          } )
        }
 


      </ScrollView>

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