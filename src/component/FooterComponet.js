//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Footer, FooterTab, Button, Icon, Thumbnail} from 'native-base';
import carpenterImage from '../Assets/carpenterbw.png';
import plumberImage from '../Assets/plumbercol.png';
import electricianImage from '../Assets/electrician.png';
import antipestImage from '../Assets/pestcol.png';
import mechanicImage from '../Assets/mechcol.png';
import cleanerImage from '../Assets/cleanercol.png';
import {withNavigation} from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
type Props = {};
// create a component
class FooterComponent extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View>
          <ScrollView horizontal={true} style={{height: hp('15%')}}>
            <FooterTab style={{backgroundColor: '#ffffff', padding: 2}}>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: '#000000',
                  backgroundColor: 'yellow',
                  width: hp('10%'),
                  borderStyle: 'solid',
                }}>
                <Button vertical transparent onPress={()=>{this.props.navigation.navigate("Carpenters")}}>
                  <View style={{marginRight: hp('2.5%')}}>
                    <Image style={styles.avatar} source={carpenterImage} />
                  </View>
                  <View>
                    <Text>Carpenter</Text>
                  </View>
                </Button>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: '#000000',
                  backgroundColor: 'white',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                  borderStyle: 'solid',
                }}>
                <Button vertical transparent>
                  <View style={{marginRight: hp('2.5%')}}>
                    <Image style={styles.avatar} source={plumberImage} />
                  </View>
                  <View>
                    <Text>Plumber</Text>
                  </View>
                </Button>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: '#000000',
                  backgroundColor: 'white',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                }}>
                <Button vertical transparent>
                  <View style={{marginRight: hp('2.5%')}}>
                    <Image style={styles.avatar} source={electricianImage} />
                  </View>
                  <View>
                    <Text>Electician</Text>
                  </View>
                </Button>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: '#000000',
                  backgroundColor: 'white',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                }}>
                <Button vertical transparent>
                  <View style={{marginRight: hp('2.5%')}}>
                    <Image style={styles.avatar} source={antipestImage} />
                  </View>
                  <View>
                    <Text>Anti Pest</Text>
                  </View>
                </Button>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: '#000000',
                  backgroundColor: 'white',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                }}>
                <Button vertical transparent>
                  <View style={{marginRight: hp('2.5%')}}>
                    <Image style={styles.avatar} source={mechanicImage} />
                  </View>
                  <View>
                    <Text>Mechanic</Text>
                  </View>
                </Button>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: '#000000',
                  backgroundColor: 'white',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                }}>
                <Button vertical transparent>
                  <View style={{marginRight: hp('2.5%')}}>
                    <Image style={styles.avatar} source={cleanerImage} />
                  </View>
                  <View>
                    <Text>Cleaner</Text>
                  </View>
                </Button>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: '#000000',
                  backgroundColor: 'yellow',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                }}>
                <Button vertical transparent>
                  <View style={{marginRight: hp('3.5%')}}>
                    <Image style={styles.avatar} source={carpenterImage} />
                  </View>
                  <View>
                    <Text>Carpenter</Text>
                  </View>
                </Button>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: '#000000',
                  backgroundColor: 'white',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                }}>
                <Button vertical transparent>
                  <View style={{marginRight: hp('3.5%')}}>
                    <Image style={styles.avatar} source={carpenterImage} />
                  </View>
                  <View>
                    <Text>Carpenter</Text>
                  </View>
                </Button>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: '#000000',
                  backgroundColor: 'yellow',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                }}>
                <Button vertical transparent>
                  <View style={{marginRight: hp('3.5%')}}>
                    <Image style={styles.avatar} source={carpenterImage} />
                  </View>
                  <View>
                    <Text>Carpenter</Text>
                  </View>
                </Button>
              </View>
            </FooterTab>
          </ScrollView>
        </View>
        <View style={{padding: 10}}>
          <Button
            onPress={() => this.props.navigation.navigate('Bookings')}
            style={{backgroundColor: '#000'}}>
            <Text style={{color: '#ffffff', marginLeft: hp('20%')}}>
              Book Now
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

// define your styles:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  avatar: {
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '#000',
    width: 45,
    height: 45,
    marginLeft: hp('2.5%'),
    marginBottom: hp('2%'),
    backgroundColor: '#ffffff',
  },
});

//make this component available to the app
export default FooterComponent;
