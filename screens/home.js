import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews} // this cycle through the reviews state array
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Review Details', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
