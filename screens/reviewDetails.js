import React from 'react';
import { View, Text, Button } from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation, route }) {
  const { title, body, rating } = route.params; // data from the home screen is passed through the route.params

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title} </Text>
        <Text>{body} </Text>
        <Text>{rating} </Text>
      </Card>
    </View>
  );
}
