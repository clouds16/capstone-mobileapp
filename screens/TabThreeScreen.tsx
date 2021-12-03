import * as React  from 'react';
import {useState , useEffect , useContext} from 'react'
import { StyleSheet , Button, TextInput , TouchableOpacity , Alert , ScrollView   } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Collapsible from 'react-native-collapsible';
import DropDownPicker from 'react-native-dropdown-picker';
import { SubTitle, Title } from 'chart.js';
import Axios from 'axios'
import Chart from './components/chart'
import AppContext from '../components/AppContext'
import {Dropdown } from 'react-native-element-dropdown'
import MuscleDropDown from './components/muscledropdown'
import UnitDropdown from './components/unitsdropdown'

export default function TabOneScreen({ navigation }: any) {

  const myContext =  useContext(AppContext);


  let [muscleValue , setMuscleValue] = useState(null)
  let [units, setUnits] =  useState(null)
  let [secondaryUnits, setSecondaryUnits] = useState(null)

  let [weight, setWeight] = useState("")
  let [force , setForce] = useState("")
  let [sets, setSet] = useState("")

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  function refreshPage() {
    window.location.reload()
  }


  function onButtonSubmit() {
    Axios.post( myContext.BACKENDSERVER + '/profile/' + myContext.USERID + '/updateweight' , {
      weight: Number(weight) ,
      units:  "lbs" , 
      user:  myContext.USERID ,  
    }).then(  (res)=> {
      console.log(res)
      alert("Data Successfully Submitted!")
      navigation.push('Profile')
      //refreshPage()
      
      

    } ).catch( (e) => alert(e))
  }
  
  function onButtonSubmitWorkout() {
    Axios.post( myContext.BACKENDSERVER + '/profile/' + myContext.USERID + '/addworkout' , {
      force : Number(force) ,
      sets : Number(sets),
      units:  secondaryUnits, 
      musclegroup : muscleValue , 
      user:  myContext.USERID ,  
    }).then(  (res)=> {
      alert('Data Successfully Submitted!')
      
      console.log(res)
      navigation.push('Profile')
      //refreshPage()

    } ).catch( (e) => {
      alert(e)
    });
  };
  

  return (

      <ScrollView>

        <View style= {styles.container}> 
          <Text>Add New Weight</Text>
          <TextInput 
              style={styles.input}
              onChangeText={setWeight}
              value={weight}
              placeholder="Enter Weight"
              keyboardType="numeric" />
          <UnitDropdown value={units} setValue={setUnits} />
     
          <Button onPress = {onButtonSubmit} title="Add new weight" ></Button>
        </View>

        <View  style= {styles.container} > 
          <Text>Add New Weight</Text>
          <TextInput 
              style={styles.input}
              onChangeText={setForce}
              value={force}
              placeholder="Force Applied (Weight)"
              />
          <TextInput 
              style={styles.input}
              onChangeText={setSet}
              value={sets}
              placeholder="Sets"
              />
          
          <UnitDropdown value={secondaryUnits} setValue={setSecondaryUnits} />

          <MuscleDropDown value={muscleValue} setValue={setMuscleValue} />

            
          <Button onPress = {onButtonSubmitWorkout} title="Add Workout" ></Button>
        </View>
        


      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  page: {

  },
  container: {
    padding: 10 ,
    margin : 20 , 
    backgroundColor : 'white' ,
    color :  'black',
    height: 'auto', 
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
    color: 'black'
  },
  buttonStyle:{
    alignItems:'center',
    backgroundColor: '#F92660',
    width:150,
    height:50,
    marginTop:20,
    marginBottom:10,
    marginRight:15,
    padding:5,
  },
  collapsed: {
    padding: 10,
    margin : 10,
    height: 400,
    backgroundColor : 'white',
    borderRadius: 10
  }, 
  buttondist: {
    margin: 10,

  },
  dropdown : {
    backgroundColor : 'white',
    margin: 5,
    padding: 3
  }
});


