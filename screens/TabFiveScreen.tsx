import * as React  from 'react';
import {useState} from 'react'
import { StyleSheet , Button, TextInput , TouchableOpacity , Alert } from 'react-native';
import {ListItem } from 'react-native-elements'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const list = [
    {
      name: 'Change Name',
      subtitle: 'edit user name'
    },
    {
      name: 'Change Password',
      subtitle: 'Edit user password'
    },
    {
      name: 'Change Program',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Logout',
      subtitle: 'logout of application',
      funct : createTwoButtonAlert  
    },

  ]

  function createTwoButtonAlert() {
    Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => navigation.push("Root") }
        ]
      );
}

  return (
    <View style={styles.page}>
      <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <TouchableOpacity onPress={ l.funct}>
                <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
              </TouchableOpacity>
            </ListItem>
          ))
        }
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button onPress={()=> navigation.push('Root') } title="Logout"></Button>
    
    </View>
  );
}

const styles = StyleSheet.create({
  page: {

  },
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
    color: 'rgba(255,255,255)'
  },
});
