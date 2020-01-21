//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Header, Left, Right, Icon, Body,Button} from 'native-base';
import {Menu, Provider, Divider} from 'react-native-paper';
//import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// create a component
class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.address = this.props.address;
    this.onMenuPress = this.onMenuPress.bind(this);
  }

  _openMenu = () => this.setState({visible: true});

  _closeMenu = () => this.setState({visible: false});
  onMenuPress() {
    console.log('clicked');

    this.props.toggleDrawer();
  }
  render() {
    return (
      <Header
        style={{
          backgroundColor: '#45425d',
          height: hp('7%'),
        }}
        androidStatusBarColor="#4D4151">
        <Left>
          <Button transparent onPress={this.onMenuPress}>
            <Icon
              name="md-menu"
              type="Ionicons"
              style={{fontSize: 25, color: '#FFFFFF'}}
            />
          </Button>
        </Left>
        <Body>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: Dimensions.get('window').width,
            }}>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignContent: 'space-between',
                marginLeft: hp('5%'),
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Bookings');
                }}
                style={{
                  padding: 3,
                  borderRadius: 70,
                  borderColor: '#ffffff',
                  borderWidth: 2,
                  borderStyle: 'solid',
                  width: hp('10%'),
                  alignSelf: 'auto',
                }}>
                <Text style={{marginLeft: hp('1%')}}>Bookings</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignContent: 'space-between',
                marginRight: hp('15%'),
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('HelpScreen');
                }}
                style={{
                  padding: 3,
                  borderRadius: 70,
                  borderColor: '#ffffff',
                  borderWidth: 2,
                  borderStyle: 'solid',
                  width: hp('10%'),
                  alignSelf: 'auto',
                }}>
                <Text style={{marginLeft: hp('2%')}}>Help</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Body>
        <Right>
          <TouchableOpacity onPress={this.onMenuPress}>
            <Icon
              name="ellipsis-v"
              type="FontAwesome"
              style={{fontSize: 25, color: '#FFFFFF'}}
            />
          </TouchableOpacity>
        </Right>
      </Header>
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
});

//make this component available to the app
export default Headers;
