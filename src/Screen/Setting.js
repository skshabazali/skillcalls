import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Setting extends Component {
  static navigationOptions = {
    title: 'Settings',
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
  constructor(props) {
    super(props);
    this.state = {
      // visible: false,
      // imageModalVisible: false,
      // selectedOption: '',
      // image: [],
      // uploadUrl: '',
    };
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
