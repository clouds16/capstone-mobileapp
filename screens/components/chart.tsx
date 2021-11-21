import * as React  from 'react';
import {useState , useEffect} from 'react'
import { StyleSheet , Button, TextInput , ScrollView , SafeAreaView , Image} from 'react-native';

import {Line } from 'react-chartjs-2'
import { Text, View } from '../../components/Themed';
import Axios from 'axios'


function Chart( { style , title } ) {

    const userID = "616e339efc6733eb328488f7"
    const backendURL = 'http://18.224.36.104:3001' || "http://localhost:3001" ;


    let [xaxis, setXAxis ] = useState([])
    let [yaxis, setYAxis] = useState([])

    useEffect(()=> {
        Axios.get(backendURL+ '/profile/' + userID + '/weighthistory')
          .then( (res) =>  {
            console.log(res); 
            
            let dates = res.data.dates
            let datesarr = [] ;

            dates.forEach( (date) => {
              const sliceddate = date.slice(0,10) 
              datesarr.push(sliceddate)
            })


            setXAxis( datesarr)
            setYAxis(res.data.weight)


            console.log(typeof res.data.dates[0] , res.data.dates[0] )


            }).catch( e => alert("Could not find data"));
            
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