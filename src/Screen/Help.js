//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class Help extends Component {
  static navigationOptions = {
    title: 'Help',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#45425d',
    },
    headerTitleStyle: {
      fontWeight: '200',

      color: '#ffffff',

      fontFamily: 'Railway',

      fontSize: 18,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Help</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Help;
