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

export default class ServiceProviderHomePage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Container>


       
      <View style={{height:hp("26%")}}>
        <View style={{marginTop:hp("13%")}}>
        <SlideShow />
        </View>
        </View>
        <View></View>
      <TopNavigator  />

    
      </Container>
    
    );
  }
}
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