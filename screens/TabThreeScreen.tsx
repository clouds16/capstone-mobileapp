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

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const myContext =  useContext(AppContext);

  let [weight, setWeight] = useState("")
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [units, setUnits] = useState([
    {label: 'lbs', value: 'lbs'},
    {label: 'kg', value: 'kg'}
  ]);

  function onButtonSubmit() {
    Axios.post( myContext.BACKENDSERVER + '/profile/' + myContext.USERID + '/updateweight' , {
      weight: Number(weight) ,
      units:  "lbs" , 
      user:  myContext.USERID ,  
    }).then(  (res)=> {
      console.log(res)
      createTwoButtonAlert()
    } ).catch( e=> console.log(e))
  }


  const [muscleGroup, setMuscleGroup] = useState([
    {label: 'Shoulders', value: 'shoulders'},
    {label: 'Bicep', value: 'bicep'},
    {label: 'Tricep', value: 'tricep'},
    {label: 'Upper Back', value: 'uback'},
    {label: 'Lower Back', value: 'lback'},
    {label: 'Calves', value: 'calves'},
    {label: 'Legs', value: 'legs'}
  ]);

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return (
    <View style={styles.page}>
      <ScrollView>

        <View style= {styles.container}> 
          <Text>Add New Weight</Text>
          <TextInput 
              style={styles.input}
              onChangeText={setWeight}
              value={weight}
              placeholder="Enter Weight"
              keyboardType="numeric" />
          <DropDownPicker 
              style= {styles.dropdown}
              open={open}
              value={value}
              items={units}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setUnits}/>
          <Button onPress = {onButtonSubmit} title="Add new weight" ></Button>
        </View>

        <Text> Weight History </Text>
        <Chart title="Weight vs time HALV"  style={styles.container}  />
        


      </ScrollView>
    </View>
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
    height: 200, 
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


// {/* <Button onPress={buttonPress} title="Add New Workout" > </Button>
// <Collapsible collapsed={isButton1} style={ styles.collapsed}>
//   <Text > Some text that should be Button1</Text>
  

//   <Button onPress={()=> console.log("is pressed")} title="Submit"></Button>
// </Collapsible> */}