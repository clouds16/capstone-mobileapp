import * as React  from 'react';
import {useState} from 'react'
import { StyleSheet , Button, TextInput  , Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Axios from 'axios'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Signup'>) {

  const backendURL = 'http://ec2-18-220-16-42.us-east-2.compute.amazonaws.com:3001'


  let [userinfo, setUserInfo] = useState({ 
    email: "",
    password: ""
  })

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [fname, setFname] = useState("")
  let [lname, setLname] = useState("")
  let [age, setAge] = useState(0)

  function onButtonSubmit() {
    Axios.post(backendURL + '/signup' , {
      'fname' : fname,
      'lname' : lname, 
      'email' : email,
      'password' : password
    }).then( (res) => {
      console.log(res);
      navigation.push('Profile')
    }).catch( e => {
      console.log("could not create user")
    })
  }


  function buttonPress() {
    navigation.push('Profile')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create An Account!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TextInput
        style={styles.input}
        onChangeText={setFname }
        value={fname}
        placeholder="First Name..."
     
      />
      <TextInput
        style={styles.input}
        onChangeText={setLname }
        value={lname}
        placeholder="Last Name..."
     
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail }
        value={email}
        placeholder="Email..."
     
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword }
        value={password}
        placeholder="Password..."
     
      />
      <Button
        onPress={onButtonSubmit}
        title="Sign Up!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"/>

      <Button
        onPress={()=> navigation.push('Profile')}
        title="quick login"
        color="rgb(100, 166 ,231)"
        accessibilityLabel="quicklogin "/>
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
    color: 'white'
  },
});
