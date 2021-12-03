import * as React  from 'react';
import {useState , useEffect , useContext} from 'react'
import { StyleSheet , Button, TextInput , ScrollView , SafeAreaView , Image} from 'react-native';

import {Line } from 'react-chartjs-2'
import { Text, View } from '../../components/Themed';
import Axios from 'axios'
import AppContext from '../../components/AppContext'


function Chart( { style , title , musclegroup , property }:any) {

  const myContext =  useContext(AppContext);

    let [importdata , setData ] = useState([])
    let [xaxis, setXAxis ] = useState([])
    let [yaxis, setYAxis] = useState([])

    const [loading, setLoading] = useState(false);

    useEffect(()=> {
      
      console.log(myContext.BACKENDSERVER , myContext.USERID)
        Axios.get(myContext.BACKENDSERVER+ '/profile/' + myContext.USERID + '/workouthistory')
          .then( (res) =>  {
            
            console.log("data is now: " , res.data)
            setData( res.data)
            
            let dates:any = [] ;
            let values:any = []

            res.data.map( (item) => {
              if (item.musclegroup ==  musclegroup) {
                dates.append(item.createdAt)
                values.append(item[property])
              } else {
                console.log("nada")
              }
            })


            setXAxis(dates)
            setYAxis(values)

            


            }).catch( e =>{
              alert("Could not find data")});
            
      }, [] )
  
    const data = {
        labels: xaxis,
        datasets: [
          {
            label: title,
            data: yaxis,
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
          <Line data={data} options={options} />
        </View>

      )
}




export default Chart ;