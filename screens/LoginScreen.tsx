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
  const backendURL = myContext.backendURL;
  console.log(backendURL , myContext.GlobalUserID)

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [userID , setUserID] = useContext(GlobalState)

  
  
  function loginButtonPress(){

    if (email && password) {
      Axios.post(backendURL + '/login', {
        "email" : email ,
        "password" : password
      } ).then( (res) => {
        if (res.data._id) {
          myContext.setUserID(res.data._id)
          navigation.push('Profile')
        }  else {
          console.log("couldnt not sign in")
        }
      }).catch( (e) => {
        console.log(e)
      })
    } else {
      console.log("parameters cannot be empty")
    }
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text> some text and url : {backendURL} </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
    color: 'white',
    
  },
});
