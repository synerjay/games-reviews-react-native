import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

export default function ReviewDetails({ navigation, route }) {
  const { title, body, rating } = route.params; // data from the home screen is passed through the route.params

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title} </Text>
        <Text>{body} </Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          {/* <Image source={images.ratings[rating]} /> */}
          <View style={styles.hearts}>
            {Array(parseInt(rating))
              .fill()
              .map(() => (
                <Image source={require('../assets/rating-1.png')} />
              ))}
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  hearts: {
    flexDirection: 'row',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
