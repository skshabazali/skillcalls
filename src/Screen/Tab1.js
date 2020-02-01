//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Card,
  CardItem,
  Button,
} from 'native-base';
import image from '../Assets/usericon.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextInput} from 'react-native-paper';

// create a component
class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
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
    var data = [
      {
        image: image,
        name: 'Shabaz Ali',
        email: 'coolshabazali@gmail.com',
        phone: '7504600298',
        add: 'tat',
        description: 'sadkjlasdbajllajcnacnacjlzczlll',
      },
      {
        image: image,
        name: 'Shabaz Ali',
        email: 'coolshabazali@gmail.com',
        phone: '7504600298',
        add: 'tat',
        description: 'sadkjlasdbajllajcnacnacjlzczlll',
      },
      {
        image: image,
        name: 'Shabaz Ali',
        email: 'coolshabazali@gmail.com',
        phone: '7504600298',
        add: 'tat',
        description: 'sadkjlasdbajllajcnacnacjlzczlll',
      },
      {
        image: image,
        name: 'Shabaz Ali',
        email: 'coolshabazali@gmail.com',
        phone: '7504600298',
        add: 'tat',
        description: 'sadkjlasdbajllajcnacnacjlzczlll',
      },
    ];
    return (
      <ScrollView>
        <List
          dataArray={data}
          renderRow={item => (
            <Card
              style={{
                width: wp('90%'),
                height: hp('50%'),
                marginLeft: hp('2.5%'),
                marginTop: hp('1%'),
              }}>
              <CardItem style={{height: hp('14%')}} bordered>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginBottom: hp('15%'),
                  }}>
                  <View style={{flex: 0.3, marginTop: hp('2%')}}>
                    <Image
                      source={item.image}
                      style={{
                        width: hp('10%'),
                        marginLeft: hp('1s%'),
                        height: hp('10%'),
                        borderWidth: 2,
                        borderColor: 'white',
                        borderRadius: 50,
                        backgroundColor: 'black',
                      }}
                    />
                  </View>
                  <View style={{flex: 0.7, marginTop: hp('2%')}}>
                    <Text style={{color: 'grey'}}>{item.name}</Text>
                    <Text style={{color: 'grey'}}>{item.email}</Text>
                    <Text style={{color: 'grey'}}>{item.phone}</Text>
                    <Text style={{color: 'grey'}}>{item.add}</Text>
                  </View>
                </View>
              </CardItem>
              <CardItem style={{height: hp('6%'), marginBottom: hp('2%')}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 0.7, marginLeft: hp('3%')}}>
                    <Text style={{fontSize: 15}}>Customer Requirements:</Text>
                  </View>
                  <View style={{flex: 0.3}}>
                    <Text style={{fontSize: 13}}>[Chair,Door]</Text>
                  </View>
                </View>
              </CardItem>
              <CardItem style={{height: hp('6%'), marginBottom: hp('2%')}}>
                <View style={{marginLeft: hp('3%'), marginBottom: hp('2%')}}>
                  <Text style={{fontSize: 15}}>Problem Description:-</Text>
                  <Text style={{fontSize: 13}}>{item.description}</Text>
                </View>
              </CardItem>
              <CardItem
                style={{height: hp('6%'), marginBottom: hp('1%')}}
                bordered>
                <View
                  style={{
                    marginLeft: hp('1%'),
                    marginBottom: hp('1%'),
                    width: wp('70%'),
                  }}>
                  <TextInput
                    style={{
                      marginHorizontal: hp('0.5%'),
                      backgroundColor: 'white',
                      marginBottom: hp('3%'),
                    }}
                    placeholder="Minimum Amount to be charged"
                    onChangeText={text => {
                      this.setState({text: text});
                    }}
                    value={this.state.text}
                    theme={{colors: {primary: '#0cb5e8'}}}
                  />
                </View>
              </CardItem>
              <CardItem style={{marginBottom: hp('2%')}}>
                <View
                  style={{
                    paddingRight: hp('2%'),
                    paddingLeft: hp('2%'),
                    paddingTop: hp('2%'),
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
                        ACCEPT
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
                        this.shootToast('Booking Cancel');
                      }}>
                      <Text style={{marginLeft: hp('5%'), color: 'white'}}>
                        CANCEL
                      </Text>
                    </Button>
                  </View>
                </View>
              </CardItem>
            </Card>
          )}
        />
      </ScrollView>
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
export default Tab1;
