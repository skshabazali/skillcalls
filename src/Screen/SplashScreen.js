//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import backgroundImage from '../Assets/skillkarticon.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');
// create a component
class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0.5);
    this.animatedValue2 = new Animated.Value(0);
    this.state = {
      isAcknowledged1: false,
      isAcknowledged2: false,
      isAcknowledged3: false,
      initialLaunch: false,
      notConnected: false,
    };
  }
  componentDidMount() {
    this.launchAnimation();
    setTimeout(() => {
      this.props.navigation.navigate('LoginScreen');
    }, 4 * 1000);
  }
  launchAnimation() {
    // setTimeout(() => {
    //   this.props.navigation.dispatch(resetAction);
    // }, 4 * 100);

    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 4,
      delay: 2500,
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 200,
      duration: 3000,
    }).start();
    // setTimeout(() => {
    //   firebase.auth().onAuthStateChanged(user => {
    //     this.props.navigation.navigate(user ? 'Home' : 'Login');
    //   })
    // }, 4 * 1000)
  }
  render() {
    const truckStyle = {
      transform: [{scale: this.animatedValue}],
    };

    const scaleText = {
      transform: [{scale: this.animatedValue2}],
    };
    return (
      <LinearGradient
        colors={[
          '#4960cf',
          '#765fd2',
          '#9b5cd2',
          '#bc58cf',
          '#da53c8',
          //   '#00FFFF',
          //   '#17C8FF',
          //   '#329BFF',
          //   '#4C64FF',
          //   '#6536FF',
          //   '#8000FF',
        ]}
        style={styles.container}>
        <Animated.View style={[styles.ring, truckStyle]}>
          <Animated.Image
            source={backgroundImage}
            style={[
              {
                resizeMode: 'contain',
                width: 235,
                height: 200,
                //backgroundColor: "#fff"
              },
            ]}
          />
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#17C8FF',
              fontFamily: 'Railway',
            }}>
            SkillCalls
          </Text>
        </Animated.View>

        <Animated.View
          style={[
            {
              position: 'absolute',
              bottom: 20,
              width: width / 2,
              height: 4,
              backgroundColor: '#fff',
              borderRadius: 2,
            },
            scaleText,
          ]}
        />
      </LinearGradient>
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
  ring: {
    //backgroundColor: "#40C4FF",
    backgroundColor: '#fff',
    borderRadius: 150,
    borderWidth: 2,
    borderColor: '#40C4FF',
    padding: 10,
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20,
  },
});

//make this component available to the app
export default SplashScreen;
