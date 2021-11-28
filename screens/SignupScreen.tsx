import * as React  from 'react';
import {useState , useContext } from 'react'
import { StyleSheet , Button, TextInput  , Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Axios from 'axios'
import AppContext from '../components/AppContext'


export default function TabOneScreen({ navigation }: RootTabScreenProps<'Signup'>) {


  const myContext =  useContext(AppContext);


  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [fname, setFname] = useState("")
  let [lname, setLname] = useState("")
  let [phone, setPhone] = useState("")
  let [age, setAge] = useState(0)

  function onButtonSubmit() {
    Axios.post(myContext.BACKENDSERVER + '/signup' , {
      'fname' : fname,
      'lname' : lname, 
      'email' : email,
      'password' : password, 
      'phone' : phone
    }).then( (res) => {
      console.log(res);
      myContext.SETUSERID(res.data._id)
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
        onChangeText={setPhone }
        value={phone}
        placeholder="Phone..."
     
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
