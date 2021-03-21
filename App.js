import React from 'react';
import About from './components/About';
import Search from './components/Search';
import { NavigationContainer } from '@react-navigation/native'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {  } from 'react-native';

const Tab = createMaterialTopTabNavigator();
export default class App extends React.Component {

  render () {
      return (
       
          <NavigationContainer>
            <Tab.Navigator
            tabBarOptions={{
              labelStyle: { fontSize: 12 },
              indicatorStyle: {
                backgroundColor : '#0d75ac',
                height : 3,
              },
              showIcon: true,
              style: { /* backgroundColor: 'powderblue' ,*/},
            }}
            tabBarPosition= {'bottom'}
              style={{}}>
              <Tab.Screen name="Search City" component={Search} />
              <Tab.Screen name="About" component={About} />
            </Tab.Navigator>
          </NavigationContainer>
        
    );
  }
}


