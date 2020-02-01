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
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Tab3 from '../Tab3';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SlideShow from '../../component/SlideShow';

export default class ServiceProviderHomePage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{height:hp("25%")}}>
        <SlideShow />
      </View>
      <Tabs>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#45425d'}}>
              <Text style={{color: '#fafafa'}}>FACILITES</Text>
            </TabHeading>
          }>
          <View>
            <Tab1 />
          </View>
        </Tab>

        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#45425d'}}>
              <Text style={{color: '#fafafa'}}>BOOKINGS</Text>
            </TabHeading>
          }>
          <View>
            <Tab2 />
          </View>
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#45425d'}}>
              <Text style={{color: '#fafafa'}}>PROFILE</Text>
            </TabHeading>
          }>
          <View>
            <Tab3 navigation={this.props.navigation.state.params.navigation} />
          </View>
        </Tab>
      </Tabs>
    </View>
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