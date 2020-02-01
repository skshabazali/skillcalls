//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Container, Content, List, ListItem,Button} from 'native-base';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ToggleSwitch from 'toggle-switch-react-native';
import image from '../Assets/usericon.png';
import {Rating, AirbnbRating} from 'react-native-ratings';
// create a component
class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onToggle: false,

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
 ratingCompleted(rating) {
    //this.setState({starCount:rating});
    console.log("star",rating);
  }
  render() {
    return (
      <View>
        <View
          style={{
            height: hp('20%'),
            backgroundColor: '#00004d',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Image
              source={image}
              style={{
                marginTop: hp('2%'),
                width: hp('10%'),
                height: hp('10%'),
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 50,
                backgroundColor: 'black',
              }}
            />
          </TouchableOpacity>
          <Text style={{color: '#fafafa', marginTop: hp('1%')}}>Shabaz</Text>
          <Text style={{color: '#fafafa'}}>coolshabazali@gmail.com</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 0.9}}>
            <Text style={{fontSize:20,fontWeight:"bold",marginLeft:hp("1%")}}>Online/Offline</Text>
          </View>
          <View style={{flex: 0.15, marginTop: hp('2%')}}>
            <ToggleSwitch
              isOn={this.state.onToggle}
              onColor="green"
              offColor="red"
              labelStyle={{color: 'black', fontWeight: '900'}}
              size="medium"
              onToggle={() => {
                this.setState({onToggle: !this.state.onToggle});
              }}
            />
          </View>
        </View>
        <View style={{marginTop:hp("3%"),marginRight:hp("23%")}}>
        <Rating
         fractions={4}
        // startingValue={this.state.starCount}
          onFinishRating={this.ratingCompleted}
          style={{paddingVertical: 10}}
        />
        </View>
        <View>
          <Text style={{marginLeft: hp('1%'),fontWeight:"bold"}} >Min Charge:50</Text>
          <Text style={{marginLeft: hp('1%'),fontWeight:"bold"}}>phone:7504600298</Text>
          <Text style={{marginLeft: hp('1%'),fontWeight:"bold"}}>Address:tat</Text>
        </View>
        <View
                  style={{
                    paddingRight: hp('2%'),
                    paddingLeft: hp('2%'),
                    paddingTop: hp('4%'),
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 0.5, marginRight: hp('2%')}}>
                    <Button
                      style={{
                        borderRadius: 15,
                        backgroundColor: 'white',
                        borderColor: 'black',
                        borderWidth: 1,
                      }}
                      onPress={() => {
                        this.shootToast('Booking Accepted');
                      }}>
                      <Text style={{marginLeft: hp('5%'), color: 'black'}}>
                        EDIT_PROFILE
                      </Text>
                    </Button>
                  </View>
                  <View style={{flex: 0.5}}>
                    <Button
                      style={{
                        borderRadius: 15,
                        backgroundColor: 'black',
                      }}
                      onPress={() => {
                        this.props.navigaiton.navigate('Home');
                      }}>
                      <Text style={{marginLeft: hp('5%'), color: 'white'}}>
                        LOGOUT
                      </Text>
                    </Button>
                  </View>
                </View>
                <View
                  style={{
                    paddingRight: hp('2%'),
                    paddingLeft: hp('2%'),
                    paddingTop: hp('8%'),
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 0.5, marginRight: hp('2%')}}>
                    <Button
                      style={{
                        borderRadius: 15,
                        backgroundColor: 'black',
                       
                        borderColor: 'black',
                        borderWidth: 1,
                      }}
                      onPress={() => {
                        this.shootToast('Account Deleted');
                      }}>
                      <Text style={{marginLeft: hp('5%'), color: 'white'}}>
                        DELETE ACCOUNT
                      </Text>
                    </Button>
                  </View>
                  <View style={{flex: 0.5}}>
                    <Button
                      style={{
                        borderRadius: 15,
                        backgroundColor: 'white',
                        
                        borderColor: 'black',
                        borderWidth: 1,
                      }}
                      onPress={() => {
                        this.shootToast('Booking Cancel');
                      }}>
                      <Text style={{marginLeft: hp('5%'), color: 'black'}}>
                        FEEDBACK
                      </Text>
                    </Button>
                  </View>
                </View>

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
});

//make this component available to the app
export default Tab3;
