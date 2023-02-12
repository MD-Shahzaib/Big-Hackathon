// In Navigation.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import components
import MainPage from "../Screens/MainPage"
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';

import AddItem from '../Screens/AddItem';
import AdminAccount from '../Screens/AdminAccount';
import AdminHome from "../Screens/AdminHome"



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen  name="MainPage" component={MainPage} />
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen  name="Signup" component={Signup} />
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Admin" component={AdminTab} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AdminTab() {
  return (

      <Tab.Navigator screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
              top: -30,
              width: 300,
              height: 70,
              borderRadius: 60,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
          }
      }}>
          <Tab.Screen name="AdminHome" component={AdminHome} options={{
              tabBarIcon: ({ focused }) => (
                  <View>
                      {focused ? <Ionicons name='home' size={20} /> : <Ionicons name='home-outline' size={20} />}
                  </View>
              )
          }} />
          <Tab.Screen name="AddItem" component={AddItem} options={{
              tabBarIcon: ({ focused }) => (
                  <View>
                      {focused ? <Ionicons name='add-circle' size={25} /> : <Ionicons name='add' size={25} />}
                  </View>
              )
          }} />
          <Tab.Screen name="AdminAccount" component={AdminAccount} options={{
              tabBarIcon: ({ focused }) => (
                  <View>
                      {focused ? <Ionicons name='person' size={20} /> : <Ionicons name='person-outline' size={20} />}
                  </View>
              )
          }} />
      </Tab.Navigator>
  );
}






export default Navigation;