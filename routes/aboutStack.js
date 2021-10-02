import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';

const AboutStack = () => {
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
        name='About'
        component={About}
        options={{ title: 'About' }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AboutStack;
