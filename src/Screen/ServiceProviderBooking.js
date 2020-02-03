//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Container, Content} from 'native-base';

// create a component
class BOOKINGS extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Booking</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  newcontainer: {
    flex: 1,
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

//make this component available to the app
export default BOOKINGS;
