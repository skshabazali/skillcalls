//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ToastAndroid,
} from 'react-native';
import image from '../Assets/spicon.png';
import {compose} from 'recompose';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
} from 'react-native-formik';
import {TextField} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Container, Content, Icon, ListItem} from 'native-base';
import {List} from 'react-native-paper';

const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput,
)(TextField);
const MySelect = compose(
  handleTextInput,
  withNextInputAutoFocusInput,
)(Dropdown);
const Form = withNextInputAutoFocusForm(View);
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(3, 'please enter Firstname'),

  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .required()
    .min(4, 'Seems a bit short We prefer secure system')
    .max(14, 'Try a shorter password'),
  conpassword: Yup.string()
    .required()
    .label('Confirm password')
    .test('passwords-match', 'Both Passwords must match', function(value) {
      return this.parent.password === value;
    }),
  phone: Yup.number()
    .min(10, 'Please enter 10 digit number')
    .required(),

  service: Yup.string().required(),
});

// create a component
class RegisterServiceProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedServiceType: '',
      initialValues: null,
    };
  }

  onServiceSelection = item => {
    console.log('selectevalue', item);

    this.setState({selectedServiceType: item});
  };
  shootToast = message => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      25,
      50,
    );
  };
  writeUserData = () => {
    this.shootToast('Sucess');
    // console.log('value', value);
    // //var value = this.refs.form.getValue();
    // this.setState({showSpinner: true});
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(value.email, value.password)
    //   .then(data => {
    //     //console.log("user", firebase.auth().currentUser.uid);
    //     this.setState({
    //       userId:
    //         firebase.auth() && firebase.auth().currentUser
    //           ? firebase.auth().currentUser.uid
    //           : '',
    //     });
    //     //this.databaseRef = firebase.firestore().collection(`user/${this.state.userId}/`);
    //     //this.afs.collection('[your collection]').doc('[your ID]').set([your document]);
    //     this.databaseRef
    //       .doc(this.state.userId)
    //       .set({
    //         first: value.first,
    //         last: value.last,
    //         email: value.email,
    //         phone: value.phone,
    //         password: value.password,
    //         conpassword: value.conpassword,
    //         initiatedName: value.initiatedName ? value.initiatedName : ' ',
    //         accountId: 'NA',
    //         isSellersProfileComplete: false,
    //         isOTPVerified: false,,
    //         // image: this.state.uploadUrl,
    //       })
    //       .then(data => {
    //         //success callback
    //         console.log('data ', data);
    //         fetch('http://admin.tamaltree.org/api/signup.php', {
    //           method: 'POST',
    //           headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({
    //             name: value.first + ' ' + value.last,
    //             username: value.email,
    //             email: value.email,
    //             userid: this.state.userId,
    //             playerid: this.state.playerId,
    //             fcmtoken: this.state.fcmToken,
    //           }),
    //         }).then(() => {
    //           this.setState({showSpinner: false});
    //           this.props.navigation.navigate('Login');
    //         });
    //       })
    //       .catch(error => {
    //         //error callback
    //         console.log('error ', error);
    //         this.setState({showSpinner: false});
    //         Alert.alert('Login Failed', error.message);
    //       });
    //   })
    //   .catch(error => {
    //     let errorCode = error.code;
    //     let errorMessage = error.message;
    //     this.setState({showSpinner: false});
    //     Alert.alert('Login Failed', error.message);
    //   });
  };

  render() {
    var serviceType = [
      {
        value: 'Plumber',
      },
      {
        value: 'Carpenter',
      },
      {
        value: 'Electricain',
      },
      {
        value: 'Pest Controller',
      },
      {
        value: 'Cleaner',
      },
      {
        value: 'Appliance Cleaner',
      },
    ];
    return (
      <Container style={{backgroundColor: '#F2F6F8'}}>
        <Content>
          <View style={{alignSelf: 'center', marginTop: hp('2%')}}>
            <Image
              style={{
                width: hp('10%'),
                height: hp('10%'),
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 75,
                backgroundColor: 'grey',
              }}
              source={image}
            />
          </View>
          <View style={{position: 'absolute', top: '30%', left: '5%'}}>
            <Icon
              name="email"
              type="MaterialIcons"
              style={{color: '#A6A6A6', fontSize: 25}}
            />
          </View>
          <View style={{position: 'absolute', top: '45%', left: '5%'}}>
            <Icon
              name="lock-outline"
              type="MaterialIcons"
              style={{color: '#A6A6A6', fontSize: 25}}
            />
          </View>
          <View style={{position: 'absolute', top: '59%', left: '5%'}}>
            <Icon
              name="lock-outline"
              type="MaterialIcons"
              style={{color: '#A6A6A6', fontSize: 25}}
            />
          </View>
          <View style={{position: 'absolute', top: '75%', left: '5%'}}>
            <Icon
              name="tools"
              type="Octicons"
              style={{color: '#A6A6A6', fontSize: 25}}
            />
          </View>

          <Formik
            onSubmit={values => alert(JSON.stringify(values, null, 2))}
            validationSchema={validationSchema}
            render={props => {
              return (
                <Form>
                  <View style={{padding: 20, marginLeft: hp('4%')}}>
                    <ScrollView>
                      <MyInput label="Email" name="email" type="emailid" />
                      <MyInput
                        label="Password"
                        name="password"
                        type="password"
                      />
                      <MyInput
                        label="ConfirmPassword"
                        name="conpassword"
                        type="password"
                      />
                      <MySelect
                        label="Service Type"
                        name="service"
                        type="service"
                        // data={this.state.transactionType}
                        data={serviceType}
                      />

                      <View style={styles.buttonStyle}>
                        <TouchableOpacity
                          style={styles.buttonStyle}
                          onPress={
                            (props.handleSubmit,
                            () => {
                              this.props.navigation.navigate(
                                'AdditionalRegisterServiceProviderPage',{navigation:this.props.navigation}
                              );
                            })
                          }>
                          <Text
                            style={{
                              fontSize: 20,
                              color: '#FFFFFF',
                              marginLeft: hp('22%'),
                              fontFamily: 'Railway',
                              marginBottom: wp('1%'),
                            }}>
                            SIGNUP
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                  </View>
                </Form>
              );
            }}
          />
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
    backgroundColor: '#2c3e50',
  },
  buttonStyle: {
    marginTop: hp('1%'),
    height: hp('7%'),
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp('100%'),
    backgroundColor: 'black',
  },
});

//make this component available to the app
export default RegisterServiceProvider;
