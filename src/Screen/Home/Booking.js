//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {
  Header,
  Left,
  Right,
  Icon,
  Body,
  Container,
  Content,
  Tab,
  Tabs,
  TabHeading,
} from 'native-base';
import {Menu, Provider, Divider, Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import Tab1 from '../Facilites';
import Tab2 from '../ServiceProviderBooking';
import Tab3 from '../ServiceProviderProfile';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SlideShow from '../../component/SlideShow';
import TopNavigator from '../../component/TopNavigator';

// create a component
class Booking extends Component {
  static navigationOptions = {
    title: 'Bookings',
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
    <View style={styles.container}>
      <Text>Bookings</Text>
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
    backgroundColor: '#2c3e50',
  },
  avatar: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e6e6e6',
    width: hp('33%'),
    height: hp('14%'),
  },
  avatarContainerIcon: {
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
});

//make this component available to the app
export default Booking;
