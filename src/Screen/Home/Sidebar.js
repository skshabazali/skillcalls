//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ToastAndroid} from 'react-native';
import profileImage from '../../Assets/usericon.png';
import {
  List,
  ListItem,
  Left,
  Icon,
  Body,
  Content,
  Button,
  Container,
  Row,
} from 'native-base';
import PopupDialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  DialogFooter,
} from 'react-native-popup-dialog';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from 'react-native-elements';

// create a component
class Sidebar extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      aboutUs: false,
    };
  }
  shootToast = message => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      25,
      50,
    );
  };
  render() {
    return (
      <Container>
        <Content>
          <List>
            <View style={{backgroundColor: '#130F30'}}>
              <ListItem noBorder>
                <View style={{paddingTop: hp('2%')}}>
                  <Image
                    style={{
                      width: hp('10%'),
                      marginLeft: hp('10%'),
                      height: hp('10%'),
                      borderWidth: 2,
                      borderColor: 'white',
                      borderRadius: 50,
                      backgroundColor: 'black',
                    }}
                    source={profileImage}
                  />
                  <Text style={{marginLeft: hp('10%'), color: '#fff'}}>
                    User_Name
                  </Text>
                  <Text style={{marginLeft: hp('5%'), color: 'white'}}>
                    user.email@domain.com
                  </Text>
                  <Text style={{marginLeft: hp('8%'), color: 'white'}}>
                    Phone:xxxxxxxxx
                  </Text>
                </View>
              </ListItem>
            </View>
            <ListItem
              noBorder
              onPress={() => {
                //this.props.navigation.navigate("Fundraise")
                this.shootToast('Book Now');
              }}>
              <Left>
                <Icon
                  name="map-marker"
                  type="FontAwesome"
                  style={{color: '#A6A6A6'}}
                />
              </Left>
              <View style={{marginRight: hp('15%')}}>
                <Body>
                  <Text>Book Now</Text>
                </Body>
              </View>
            </ListItem>
            <ListItem
              noBorder
              onPress={() => {
                this.props.navigation.navigate('RegisterService');
              }}>
              <Left>
                <Icon
                  name="access-time"
                  type="MaterialIcons"
                  style={{color: '#A6A6A6'}}
                />
              </Left>
              <View style={{marginRight: hp('0.3%')}}>
                <Body>
                  <Text>Register As Service Provider</Text>
                </Body>
              </View>
            </ListItem>
            <ListItem
              noBorder
              onPress={() => {
                this.props.navigation.navigate('LoginService');
              }}>
              <Left>
                <Icon
                  name="format-list-bulleted"
                  type="MaterialCommunityIcons"
                  style={{color: '#A6A6A6'}}
                />
              </Left>
              <View style={{marginRight: hp('2%')}}>
                <Body>
                  <Text>Log in as Service Provider</Text>
                </Body>
              </View>
            </ListItem>
            <ListItem
              noBorder
              onPress={() => {
                //this.props.navigation.navigate("Fundraise")
                this.shootToast('Comming Soon');
              }}>
              <Left>
                <Icon
                  name="user"
                  type="FontAwesome5"
                  style={{color: '#A6A6A6'}}
                />
              </Left>
              <View style={{marginRight: hp('13.1%')}}>
                <Body>
                  <Text>My Account</Text>
                </Body>
              </View>
            </ListItem>
            <ListItem
              onPress={() => {
                //this.props.navigation.navigate("Fundraise")
                this.shootToast('Comming Soon');
              }}>
              <Left>
                <Icon
                  name="md-create"
                  type="Ionicons"
                  style={{color: '#A6A6A6'}}
                />
              </Left>
              <View style={{marginRight: hp('13.9%')}}>
                <Body>
                  <Text>My Review</Text>
                </Body>
              </View>
            </ListItem>
            <Text style={{color: 'grey', marginLeft: hp('2%')}}>
              Communicate
            </Text>
            <ListItem
              noBorder
              onPress={() => {
                this.props.navigation.navigate('HelpScreen');
              }}>
              <Left>
                <Icon
                  name="call-merge"
                  type="MaterialIcons"
                  style={{color: '#A6A6A6'}}
                />
              </Left>
              <View style={{marginRight: hp('18.5%')}}>
                <Body>
                  <Text>Help</Text>
                </Body>
              </View>
            </ListItem>
            <ListItem
              noBorder
              onPress={() => {
                //this.props.navigation.navigate("Fundraise")
                this.setState({
                  about: true,
                });
              }}>
              <Left>
                <Icon
                  name="filter-variant"
                  type="MaterialCommunityIcons"
                  style={{color: '#A6A6A6'}}
                />
              </Left>
              <View style={{marginRight: hp('14.7%')}}>
                <Body>
                  <Text>About us</Text>
                </Body>
              </View>
            </ListItem>
            <ListItem
              noBorder
              onPress={() => {
                this.props.navigation.navigate("LoginScreen")
              }}>
              <Left>
                <Icon name="trash" type="Entypo" style={{color: '#A6A6A6'}} />
              </Left>
              <View style={{marginRight: hp('16%')}}>
                <Body>
                  <Text>Log out</Text>
                </Body>
              </View>
            </ListItem>
          </List>

          {/* <View style={{backgroundColor: '#483048', height: 200}}>
            <Text
              style={{
                fontSize: 35,
                color: '#f0f0f0',
                marginLeft: 65,
                marginTop: 20,
                fontStyle: 'bold',
              }}>
              Welcome!
            </Text>

            <Text style={{fontSize: 13, color: '#301830', marginLeft: 20}}>
              Sell unused stuff and make extra cash!
            </Text>
            <View style={{marginLeft: 50}}>
              <Button
                style={styles.btn}>
                <Text>Sign In</Text>
              </Button>
            </View>
          </View>

          <View>
            <List>
              <ListItem noBorder>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.3}}>
                    <Icon name="search" type="FontAwesome" />
                  </View>

                  <View style={{flex: 0.5}}>
                    <Text style={{marginRight: 50}}>Home</Text>
                  </View>
                </View>
              </ListItem>
              <ListItem noBorder>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.3}}>
                    <Icon name="camera" type="Feather" />
                  </View>

                  <View style={{flex: 0.5}}>
                    <Text style={{marginRight: 50}}>Post</Text>
                  </View>
                </View>
              </ListItem>
              <ListItem noBorder>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.3}}>
                    <Icon name="message-circle" type="Feather" />
                  </View>

                  <View style={{flex: 0.5}}>
                    <Text style={{marginRight: 30}}>My Messages</Text>
                  </View>
                </View>
              </ListItem>
              <ListItem noBorder>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.3}}>
                    <Icon name="account" type="MaterialCommunityIcons" />
                  </View>

                  <View style={{flex: 0.5}}>
                    <Text style={{marginRight: 50}}>My Gumtree</Text>
                  </View>
                </View>
              </ListItem>
              <ListItem noBorder>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.3}}>
                    <Icon name="heart-outline" type="MaterialCommunityIcons" />
                  </View>

                  <View style={{flex: 0.5}}>
                    <Text style={{marginRight: 50}}>Favorites</Text>
                  </View>
                </View>
              </ListItem>
              <ListItem noBorder>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.3}}>
                    <Icon name="ios-bookmark-outline" type="Ionicons" />
                  </View>

                  <View style={{flex: 0.5}}>
                    <Text style={{marginRight: 20}}>Search Alerts</Text>
                  </View>
                </View>
              </ListItem>
            </List>
          </View> */}
        </Content>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    alignContent: 'center',
    backgroundColor: '#f07878',
    width: 170,
    height: 30,
    marginTop: 20,
  },
});

//make this component available to the app
export default Sidebar;
