import { StatusBar } from 'expo-status-bar';
import React , {useState }from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import AppContext from './components/AppContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [userId, setUserId] =  useState("") ;
  const [backendServer , setBackendServer] =  useState("http://18.224.36.104:3001")

  const userSettings = {
    userId,
    backendServer,
    setUserId
  };


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppContext.Provider value={userSettings} >
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </AppContext.Provider>
      
    );
  }
}
