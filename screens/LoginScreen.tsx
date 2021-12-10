import * as React  from 'react';
import {useState , useEffect, useContext} from 'react'
import { StyleSheet , Button, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Axios from 'axios'
import GlobalState from '../user/user'
import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
import AppContext from '../components/AppContext'


export default function TabOneScreen({ navigation } : RootTabScreenProps<'Login'>) {

  const myContext =  useContext(AppContext);

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
 

  
  
  function loginButtonPress(){

    if (email && password) {
      Axios.post( myContext.BACKENDSERVER + '/login', {
        "email" : email ,
        "password" : password
      } ).then( (res) => {

        
        if (res.data._id) {
          myContext.SETUSERID(res.data._id)
          navigation.push('Profile')
        }  else {
          console.log("couldnt not sign in")
        }
      }).catch( (e) => {
        alert("Login Unsuccessful")
        console.log(e)
      })
    } else {
      console.log("parameters cannot be empty")
    }
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo} > MOTIVATR! </Text> 
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail }
        value={email}
        placeholder="Email"
        keyboardType = "default"
     
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword }
        value={password}
        placeholder="Password"
        keyboardType = "default"
     
      />
      <Button
        onPress={loginButtonPress}
        title="Login!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo : {
    fontSize: 50,
    fontWeight: 'bold',
    color : '#841584',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20
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
    color: 'white'
    
  },
});
