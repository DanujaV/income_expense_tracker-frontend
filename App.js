import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from './screen/Login';
import Dashboard from './screen/Dashboard';
import Expense from './screen/Expense';
import Income from './screen/Income';
import Signup from './screen/Signup';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="New Income" component={Income} />
          <Stack.Screen name="New Expense" component={Expense} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
