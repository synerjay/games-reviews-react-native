import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Header from '../shared/header';

const AboutStack = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Main'
      screenOptions={{
        headerStyle: { backgroundColor: '#333', height: 60 }, // change the header color and height
        headerTintColor: '#fff', // change font color
      }}
    >
      <Stack.Screen
        name='Main'
        component={About}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
            height: 90, // change the header color and height
          },
          headerTintColor: '#fff', // change font color
          headerTitle: () => (
            <Header title='About GameZone' navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AboutStack;
