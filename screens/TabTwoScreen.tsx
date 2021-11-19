import * as React  from 'react';
import {useState} from 'react'
import { StyleSheet , Button, TextInput , ScrollView , SafeAreaView , Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import YoutubePlayer from 'react-native-youtube-iframe'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  return (
    <View >
      
      <ScrollView>
        <Text style={styles.title}> Arms</Text>
        
          <ScrollView horizontal={true}> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/>
          </ScrollView>
        

        <Text style={styles.title}> Legs </Text>
        
          <ScrollView horizontal={true}> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/>
          </ScrollView>
        


        <Text style={styles.title}> Core </Text>
       
          <ScrollView horizontal={true}> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/>
          </ScrollView>
      

        <Text style={styles.title}> Chest</Text>
          <ScrollView horizontal={true}> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/> 
            <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/>
          </ScrollView>
      </ScrollView>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 2 ,
    margin : 10 , 
    backgroundColor : 'white' ,
    color :  'black',
    height: 'auto', 
    borderRadius : 20
  },
  horizontal : {
    margin: 10,
    borderRadius : 20
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
});
