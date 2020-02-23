//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Animated,
  Alert,
  BackHandler,
} from 'react-native';
import HandleBack from '../component/HandleBack';
import {TextInput} from 'react-native-paper';
import backgroundImage from '../Assets/skillkarticon.png';
import {Container, Content, Icon} from 'native-base';
import facebookImage from '../Assets/facebook.png';
import {Formik} from 'formik';
import {
  handleTextInput,
  withNextInputAutoFocusInput,
  withNextInputAutoFocusForm,
} from 'react-native-formik';
import {TextField} from 'react-native-material-textfield';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import {compose} from 'recompose';

const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput,
)(TextField);
const Form = withNextInputAutoFocusForm(View);
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .required()
    .min(4, 'Seems a bit short We prefer secure system')
    .max(14, 'Try a shorter password'),
});
// create a component
class LoginServiceProvider extends Component {
  static navigationOptions = {header: null};
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      opacity: new Animated.Value(0),
      clickedPosition: 1,
    };
  }
  onLaunchAnimation = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  };
  onBack = () => {
    const {clickedPosition} = this.state;
    if (clickedPosition === 1 && this.props.navigation.isFocused()) {
      Alert.alert(
        'Exit Application',
        'Do you want to quit application?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        {
          cancelable: false,
        },
      );
    }
  };
  handleLogin = value => {
    alert('Clicked');
    // this.setState({showSpinner: true});
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(value.email, value.password)
    //   .then(() => {
    //     this.setState({showSpinner: false});
    //     //meeting.join(null, 'tamaltreeSession-ID');
    //     // meeting.join(firebase.auth().currentUser.uid, firebase.auth().currentUser.displayName);
    //     AddToGathering();
    //     this.props.navigation.navigate('Home');
    //   })
    //   .catch(error => {
    //     this.setState({showSpinner: false});
    //     Alert.alert('Login Failed', error.message);
    //   });
  };

  render() {
    return (
      <Container>
        <Content>
          <View
            style={{
              flex: 1,
              height:hp("35%"),
              backgroundColor:"grey"
            }}>
              <Image style={{height:hp('15%'),width:hp("15%"),marginLeft:hp("20%"),marginTop:hp("6%"),borderRadius:70,borderColor:"black",borderWidth:1}} source={backgroundImage} />
              <Text style={{fontSize:20,marginLeft:hp("22%"),color:"white"}} >SkillCalls</Text>
            {/* <Animated.Image
              onLoad={this.onLaunchAnimation}
              {...this.props}
              style={[
                {
                  height: hp('25%'),
                  width: wp('45%'),
                  borderWidth: 2,
                  borderColor: 'black',
                  marginBottom: hp('8%'),
                },
                {
                  opacity: this.state.opacity,
                  transform: [
                    {
                      scale: this.state.opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.85, 1],
                      }),
                    },
                  ],
                },
              ]}
              resizeMode={'contain'}
              source={backgroundImage}
            /> */}
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'white',
              marginBottom: hp('20%'),
              marginTop:hp("4%"),
            }}>
            <View style={{position: 'absolute', top: '27%', left: '5%'}}>
              <Icon
                name="lock-outline"
                type="MaterialIcons"
                style={{color: '#A6A6A6', fontSize: 25}}
              />
            </View>
            <View style={{position: 'absolute', top: '10%', left: '5%'}}>
              <Icon
                name="email"
                type="MaterialIcons"
                style={{color: '#A6A6A6', fontSize: 25}}
              />
            </View>
            {/* for treetor logo */}

            <TextInput
              style={{
                marginHorizontal: 50,
                backgroundColor: 'white',
              }}
              label="email"
              onChangeText={text => {
                this.setState({text: text});
              }}
              value={this.state.text}
            />

            <TextInput
              style={{
                marginHorizontal: 50,
                marginBottom: 20,
                backgroundColor: 'white',
              }}
              label="password"
              selectionColor="#6EF31A"
              secureTextEntry={true}
            />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ServiceProviderHomePage');
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  height: 40,
                  justifyContent: 'center',
                  marginHorizontal: 50,
                  marginBottom: 10,
                }}>
                <Text style={{color: 'white', alignSelf: 'center'}}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                flexDirection="row"
                style={{
                  backgroundColor: '#3B5998',
                  height: 40,
                  justifyContent: 'center',
                  marginHorizontal: 50,
                  marginBottom: 10,
                }}>
                {/* <Image
                      style={{alignSelf: 'center', marginLeft: 10}}
                      source={require()}
                    /> */}
                <Icon
                  name="facebook-square"
                  type="FontAwesome"
                  style={{
                    alignSelf: 'center',
                    marginRight: hp('2%'),
                    color: 'white',
                  }}
                />
                <Text style={{color: 'white', alignSelf: 'center'}}>
                  LOGIN WITH FACEBOOK
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                flexDirection="row"
                style={{
                  backgroundColor: '#DE4B39',
                  height: 40,
                  justifyContent: 'center',
                  marginHorizontal: 50,
                  marginBottom: 10,
                }}>
                <Icon
                  name="google"
                  type="FontAwesome"
                  style={{
                    alignSelf: 'center',
                    marginRight: hp('2%'),
                    color: 'white',
                  }}
                />
                <Text style={{color: 'white', alignSelf: 'center'}}>
                  LOGIN WITH GOOGLE
                </Text>
              </View>
            </TouchableOpacity>

            <Text style={{color: 'black', alignSelf: 'center'}}>
              Forgot Password?
            </Text>
            <Text style={{alignSelf: 'center'}}>{'New to SkillCalls?'}</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('RegisterService');
              }}>
              <Text style={{color: 'black', alignSelf: 'center'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>

          {/* <View>
            <View style={{padding: 20}}>
              <Formik
                onSubmit={values => this.handleLogin(values)}
                validationSchema={validationSchema}
                render={props => {
                  return (
                    <Form>
                      <ScrollView>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 20,
                          }}>
                          <View style={[styles.avatarContainer]}>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Image
                                style={styles.image}
                                resizeMode={'contain'}
                                source={backgroundImage}
                              />
                            </View>
                          </View>
                        </View>
                        <MyInput label="Email" name="email" type="email" />
                        <MyInput
                          label="Password"
                          name="password"
                          type="password"
                        />
                        <View
                          style={{
                            flexDirection: 'row',
                            flex: 1,
                            marginTop: hp('1%'),
                            // marginLeft: hp("1%"),
                          }}>
                          <View
                            style={{
                              width: hp('30%'),
                              marginLeft: hp('0.05%'),
                            }}>
                            <TouchableOpacity
                              transparent
                              style={{justifyContent: 'flex-start'}}
                              onPress={() =>
                                this.props.navigation.navigate('Register')
                              }>
                              <Text
                                style={{
                                  textDecorationLine: 'underline',
                                  fontSize: hp('2%'),
                                  color: '#E57373',
                                  fontFamily: 'Railway',
                                }}>
                                Create Account
                              </Text>
                            </TouchableOpacity>
                          </View>

                          <View
                            style={{
                              width: hp('30%'),
                              marginLeft: hp('1%'),
                            }}>
                            <TouchableOpacity
                              transparent
                              style={{justifyContent: 'flex-end'}}
                              onPress={() =>
                                this.props.navigation.navigate('Home')
                              }>
                              <Text
                                style={{
                                  textDecorationLine: 'underline',
                                  fontSize: hp('2%'),
                                  color: '#E57373',
                                  fontFamily: 'Railway',
                                }}>
                                Guest User
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View
                          style={{
                            marginTop: hp('1.5%'),
                            marginLeft: hp('1%'),
                          }}>
                          <TouchableOpacity
                            onPress={props.handleSubmit}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                          </TouchableOpacity>
                        </View>
                      </ScrollView>
                    </Form>
                  );
                }}
              />
            </View>
            <View
              style={{
                width: hp('30%'),
                marginLeft: hp('28%'),
              }}>
              <TouchableOpacity
                transparent
                style={{justifyContent: 'flex-start'}}
                onPress={() =>
                  this.props.navigation.navigate('ForgotPassword')
                }>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: hp('2%'),
                    color: '#E57373',
                    fontFamily: 'Railway',
                  }}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default LoginServiceProvider;
