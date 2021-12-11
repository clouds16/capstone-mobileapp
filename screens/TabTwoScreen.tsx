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
          videos.map( (video:any) => {
            return (
            <View style= {styles.container}> 
              <Text style={styles.title}> {video.title} , Workout for {video.muscle} </Text> 
              
              <YoutubePlayer height= {300} play={true} videoId={video.uri} /> 
              <Text style={styles.title}> {video.description} </Text> 
            </View> )
            
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
    height: 250, 
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
    color : 'black'
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
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
