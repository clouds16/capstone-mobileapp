/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen'
import TabFourScreen from '../screens/TabFourScreen'
import TabFiveScreen from '../screens/TabFiveScreen'

import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'



// import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
// import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={LoginNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          title: 'Profile',
          tabBarActiveTintColor: 'tomato',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Videos',
          tabBarActiveTintColor: 'tomato',
          tabBarIcon: ({ color }) => <TabBarIcon name="image" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: 'Add Metrics',
          tabBarActiveTintColor: 'tomato',
          tabBarIcon: ({ color }) => <TabBarIcon  name="plus" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        options={{
          title: 'Charts',
          tabBarActiveTintColor: 'tomato',
          tabBarIcon: ({ color }) => <TabBarIcon name="table" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={TabFiveScreen}
        options={{
          title: 'Settings',
          tabBarActiveTintColor: 'tomato',
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}



const AuthStack = createNativeStackNavigator();




// THIS IS MY CODE HERE 
const LoginTabs = createBottomTabNavigator();

function LoginNavigator() {
  const colorScheme = useColorScheme();

  return (
    <LoginTabs.Navigator
      initialRouteName="Signup"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <LoginTabs.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          title: 'Sign Up',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <LoginTabs.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />

    </LoginTabs.Navigator>
  );
}






/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
