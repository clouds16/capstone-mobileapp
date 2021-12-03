import * as React  from 'react';
import {useState , useEffect , useContext} from 'react'
import { StyleSheet , Button, TextInput , ScrollView , SafeAreaView , Image, TouchableOpacity} from 'react-native';

import {Line } from 'react-chartjs-2'
import { Text, View } from '../../components/Themed';
import Axios from 'axios'
import AppContext from '../../components/AppContext'


function Chart( { style , title }:any) {

  const myContext =  useContext(AppContext);

    let [xaxis, setXAxis ] = useState([])
    let [yaxis, setYAxis] = useState([])
    const [loading, setLoading] = useState(false);


    function reloadPage() {
      Axios.get(myContext.BACKENDSERVER+ '/profile/' + myContext.USERID + '/weighthistory')
      .then( (res) =>  {
        console.log(res); 
        
        let dates = res.data.dates;
        let datesarr : [] = [] ;

        console.log("1")

        dates.forEach( (date:string ) => {
          
          datesarr.push( date.slice(0,10) );
          console.log("loop")

        })

        console.log("2")
        setXAxis( datesarr)
        setYAxis(res.data.weight);

        }).catch( e =>{
          alert("Could not find data")});
    }

    useEffect(()=> {
      
      console.log(myContext.BACKENDSERVER , myContext.USERID)
        Axios.get(myContext.BACKENDSERVER+ '/profile/' + myContext.USERID + '/weighthistory')
          .then( (res) =>  {
            console.log(res); 
            
            let dates = res.data.dates;
            let datesarr : [] = [] ;

            console.log("1")

            dates.forEach( (date:string ) => {
              
              datesarr.push( date.slice(0,10) );
              console.log("loop")

            })

            console.log("2")
            setXAxis( datesarr)
            setYAxis(res.data.weight);

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
          <TouchableOpacity onPress={reloadPage} >
            <Line data={data} options={options} />
          </TouchableOpacity>        
        </View>

      )
}




export default Chart ;