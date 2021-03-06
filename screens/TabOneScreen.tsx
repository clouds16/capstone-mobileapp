import * as React  from 'react';
import {useState , useEffect , useContext} from 'react'
import { StyleSheet , Button, TextInput , ScrollView , SafeAreaView , Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Line } from 'react-chartjs-2'
import YoutubePlayer from 'react-native-youtube-iframe';
import Axios from 'axios'
import Chart from './components/chart'
import SelectVideo from './components/randomvid'
import AppContext from '../components/AppContext'


//test changes to see if git acting up
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'> ) {
  
  const myContext =  useContext(AppContext);

  const [userInfo , setUserInfo] = useState({
    fname : "" ,
    lname: "",
    userID: ""
  })



  let date = new Date()
  let Days = ['Sunday', 'Monday', "Tuesday" , 'Wednesday' , 'Thrusday' , 'Friday' , 'Saturday']
  
    useEffect(()=> {
      Axios.get(myContext.BACKENDSERVER+ '/profile/' + myContext.USERID)
        .then( (res) =>  {
          console.log(res);

          setUserInfo(prevState => ({
            ...prevState,
            ["fname"]: res.data.fname,
            ["lname"]: res.data.lname,
            ["userID"] : res.data._id
        }));
        console.log(userInfo)
          
        })
          .catch( e=> console.log( " Could not gather info"))


        
    }, [] )



  return (
  
      <ScrollView > 
        <Text> Welcome {userInfo.fname } ,{userInfo.lname} </Text>
        <Text> Today is { Days[date.getDay()]} </Text>
        <View style= {styles.profile}> 
          
          <Image source={require('../assets/images/avatar.png')} style={styles.image} ></Image>

          <View style={styles.userinfo}> 
            <Text> Hello {userInfo.fname} , {userInfo.lname} </Text>
            
            <Text> Workout Goal :  </Text>
            <Text> Workout Schedule : Three Times a Week </Text>
            <Text> Current Weight: </Text>
          </View>
        </View>

        <Text> Recent Achievements </Text>
        <Chart title="Weight vs time HALV"  style={styles.container}  />
        

        <Text> Upcoming Workouts </Text>

        <SelectVideo />

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


// var styles = StyleSheet.create({

// });