import * as React  from 'react';
import {useState , useEffect, useContext} from 'react'
import { StyleSheet , Button, TextInput , ScrollView , SafeAreaView , Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AppContext from '../components/AppContext'
import YoutubePlayer from 'react-native-youtube-iframe'
import Axios from 'axios'


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const myContext =  useContext(AppContext);
  let [videos, setVideos] = useState([]);

  useEffect( ()=> {
      Axios.get( myContext.BACKENDSERVER + '/dev/allvideos').then( (res) => {
        console.log(res.data)
        setVideos(res.data)
        
      }).catch( e =>  alert("Error loading videos"))
  }, [] )

  return (  
      <ScrollView style={styles.scrollview}>
        {
          videos.map( (video) => {
            return (
            <>
            <Text> {video.title} </Text> 
            <YoutubePlayer height= {300} play={true} videoId={video.uri} /> </>)
          })
        }
      </ScrollView>  
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
  scrollview: {
    height: 'auto'
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
