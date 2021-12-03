import * as React  from 'react';
import {useState , useEffect , useContext} from 'react'
import { StyleSheet , Button, TextInput , ScrollView , SafeAreaView , Image, TouchableOpacity} from 'react-native';

import {Line } from 'react-chartjs-2'
import { Text, View } from '../../components/Themed';
import Axios from 'axios'
import AppContext from '../../components/AppContext'


function Chart( { style , title , musclegroup }:any) {

  const myContext =  useContext(AppContext);

    let [importdata , setData ] = useState([])
    let [datesarr, setDatesarr ] = useState([])
    let [force, setForce] = useState([])
    let [sets , setSetValue] = useState(null)

    function reloadPage() {
      console.log(myContext.BACKENDSERVER , myContext.USERID)
        Axios.get(myContext.BACKENDSERVER+ '/profile/' + myContext.USERID + '/workouthistory/' + musclegroup)
          .then( (res) =>  {
            
            console.log("data is now: " , res.data)
            setData( res.data)
            setDatesarr( res.data.dates)
            setForce(res.data.force)
            setSetValue(res.data.sets)

            }).catch( e =>{
              alert("Could not find data")});
    }

    useEffect(()=> {
      
      console.log(myContext.BACKENDSERVER , myContext.USERID)
        Axios.get(myContext.BACKENDSERVER+ '/profile/' + myContext.USERID + '/workouthistory/' + musclegroup)
          .then( (res) =>  {
            
            console.log("data is now: " , res.data)
            setData( res.data)
          
            setDatesarr(res.data.dates)
            setForce(res.data.force)
            setSetValue(res.data.sets)

            


            }).catch( e =>{
              alert("Could not find data")});
            
      }, [] )
  
    const data = {
        labels: datesarr,
        datasets: [
          {
            label: title,
            data: force,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            fontWeight: 500
          },
        ],
      };
      
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };


      return (
        <View style={style}>
          <TouchableOpacity onPress={reloadPage} > 
            <Line data={data} options={options} />
          </TouchableOpacity> 
        </View>

      )
}




export default Chart ;