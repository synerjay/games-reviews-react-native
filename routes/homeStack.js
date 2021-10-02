import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#333', height: 60 }, // change the header color and height
        headerTintColor: '#fff', // change font color
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ title: 'GameZone' }}
      />
      <Stack.Screen
        name='Review Details'
        component={ReviewDetails}
        options={{ title: 'Reviews Details' }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default HomeStack;
