import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const HomeStack = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Main'
      screenOptions={{
        headerStyle: { backgroundColor: '#333', height: 90 }, // change the header color and height
        headerTintColor: '#fff', // change font color
      }}
    >
      <Stack.Screen
        name='Main'
        component={Home}
        options={{
          headerStyle: {
            // backgroundColor: '#333',
            height: 100,
          },
          headerTitle: () => (
            <Header title='Game Zone' navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name='Review Details'
        component={ReviewDetails}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default HomeStack;
