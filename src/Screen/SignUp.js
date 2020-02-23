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
export default class SignUpScreen extends Component {
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
  render() {
    return (
      <Container style={{backgroundColor:'#F2F6F8'}}>
      <Content>
        <View style={{backgroundColor:'grey',height:hp("15%")}}>
        <View style={{alignSelf: 'center', marginTop: hp('2%')}}>
          <Image
            style={{
              width: hp('10%'),
              height: hp('10%'),
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 75,
              backgroundColor: 'white',
            }}
            source={image}
          />
        </View>
        </View>
        <View style={{position: 'absolute', top: '40%', left: '5%'}}>
          <Icon
            name="email"
            type="MaterialIcons"
            style={{color: '#A6A6A6', fontSize: 25}}
          />
        </View>
        <View style={{position: 'absolute', top: '55%', left: '5%'}}>
          <Icon
            name="lock-outline"
            type="MaterialIcons"
            style={{color: '#A6A6A6', fontSize: 25}}
          />
        </View>
        <View style={{position: 'absolute', top: '72%', left: '5%'}}>
          <Icon
            name="lock-outline"
            type="MaterialIcons"
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
                   

                    <View style={styles.buttonStyle}>
                      <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={
                          (props.handleSubmit,
                          () => {
                            this.props.navigation.navigate(
                              'Home'
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
// //import liraries
// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// // create a component
// class SignUpScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>SignUpScreen</Text>
//       </View>
//     );
//   }
// }

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default SignUpScreen;
