//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  ToastAndroid,
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
    this.state = {
      carpenter: false,
      plumber: false,
      electrician: false,
      antipest: false,
      mechanic: false,
      cleaner: false,
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
      <View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{height: hp('15%')}}>
            <FooterTab style={{backgroundColor: '#ffffff', padding: 2}}>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: '#000000',
                  backgroundColor: this.state.carpenter ? 'yellow' : 'white',
                  width: hp('10%'),
                  borderStyle: 'solid',
                }}>
                <Button
                  vertical
                  transparent
                  onPress={() => {
                    this.props.onSelectServiceProvider("Carpenter")
                    // {
                    //   this.state.carpenter
                    //     ? this.props.carp()
                    //     : this.props.navigation.navigate('Carpenters');
                    // }
                  }}>
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
                  backgroundColor: this.state.plumber ? 'yellow' : 'white',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                  borderStyle: 'solid',
                }}>
                <Button
                  vertical
                  transparent
                  onPress={() => {
                    this.setState({
                      plumber: true,
                      carpenter: false,
                      electrician: false,
                      antipest: false,
                      mechanic: false,
                      cleaner: false,
                    });
                    if (this.state.plumber) {
                      this.props.plum();
                    }
                  }}>
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
                  backgroundColor: this.state.electrician ? 'yellow' : 'white',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                }}>
                <Button
                  vertical
                  transparent
                  onPress={() => {
                    this.setState({
                      electrician: true,
                      plumber: false,
                      carpenter: false,
                      antipest: false,
                      mechanic: false,
                      cleaner: false,
                    });
                    if (this.state.electrician) {
                      this.props.elect();
                    }
                  }}>
                  <View style={{marginRight: hp('2.5%')}}>
                    <Image style={styles.avatar} source={electricianImage} />
                  </View>
                  <View>
                    <Text>Electrician</Text>
                  </View>
                </Button>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: '#000000',
                  backgroundColor: this.state.antipest ? 'yellow' : 'white',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                }}>
                <Button
                  vertical
                  transparent
                  onPress={() => {
                    this.setState({
                      antipest: true,
                      plumber: false,
                      electrician: false,
                      carpenter: false,
                      mechanic: false,
                      cleaner: false,
                    });
                    if (this.state.antipest) {
                      this.props.anti();
                    }
                  }}>
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
                  backgroundColor: this.state.mechanic ? 'yellow' : 'white',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                }}>
                <Button
                  vertical
                  transparent
                  onPress={() => {
                    this.setState({
                      mechanic: true,
                      plumber: false,
                      electrician: false,
                      antipest: false,
                      carpenter: false,
                      cleaner: false,
                    });
                    if (this.state.mechanic) {
                      this.props.mech();
                    }
                  }}>
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
                  backgroundColor: this.state.cleaner ? 'yellow' : 'white',
                  width: hp('10%'),
                  marginLeft: hp('1%'),
                }}>
                <Button
                  vertical
                  transparent
                  onPress={() => {
                    this.setState({
                      cleaner: true,
                      plumber: false,
                      electrician: false,
                      antipest: false,
                      mechanic: false,
                      carpenter: false,
                    });
                    if (this.state.cleaner) {
                      this.props.clean();
                    }
                  }}>
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
            onPress={() => {
              {
                this.state.carpenter ||
                this.state.plumber ||
                this.state.electrician ||
                this.state.antipest ||
                this.state.mechanic ||
                this.state.cleaner
                  ? this.props.modal()
                  : this.shootToast('Select any one to book');
              }
            }}
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
