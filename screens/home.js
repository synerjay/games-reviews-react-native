import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('Review Details');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='to review details screen' onPress={pressHandler} />
    </View>
  );
}
