import * as React  from 'react';
import {useState , useEffect , useContext} from 'react'
import { StyleSheet , Button, TextInput , ScrollView , SafeAreaView , Image} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../types';
import {Line } from 'react-chartjs-2'
import YoutubePlayer from 'react-native-youtube-iframe';
import Axios from 'axios'
import AppContext from '../../components/AppContext'




function SelectVideo( ) {
      const myContext =  useContext(AppContext);
    const [videoID , setVideoID] = useState("")

    useEffect(()=> {
        Axios.get(myContext.BACKENDSERVER+ '/videos/suggestworkout').then( (res) =>  {
            console.log(res);
            setVideoID(res.uri);
                }).catch( (e)=> {
                    console.log( " Could not gather info")
                }); 
        
    } , [] )

    return (
        <View style={styles.container}>
            <YoutubePlayer height={300} play={true} videoId={videoID} />
        </View>
    )
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
    borderRadius : 20,


  },
  profile: {

    margin : 20 , 
    backgroundColor : 'white' ,
    color :  'black',
    height: 300, 
    borderRadius : 20,
    overflow: 'hidden'
  },

  text : {
    color : 'black'
  },

  image: {
    flex : 3,
    height: 'full' ,
    width : 'auto'

  },
  userinfo : {
    flex: 1 ,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor : 'rgb(191, 144, 224) '
  
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

export default SelectVideo;