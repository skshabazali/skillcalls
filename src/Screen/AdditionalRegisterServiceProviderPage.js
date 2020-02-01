//import liraries
import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  Modal,
  StyleSheet,
  ToastAndroid,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {TextInput} from 'react-native-paper';
import {compose} from 'recompose';
import {Formik} from 'formik';
import * as Yup from 'yup';
import DatePicker from '../component/DatePicker';
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
  withFormikControl,
} from 'react-native-formik';
import {TextField} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Container, Content} from 'native-base';
const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput,
)(TextField);
const MySelect = compose(
  handleTextInput,
  withNextInputAutoFocusInput,
)(Dropdown);
const FocusedDatePicker = compose(
  withFormikControl,
  // withNextInputAutoFocusInput
)(DatePicker);
const Form = withNextInputAutoFocusForm(View);
const validationSchema = Yup.object().shape({
  aadhar: Yup.number()
    .required()
    .min(12, 'please enter valid Aadhar Number'),
  name: Yup.string()
    .required()
    .min(3, 'please enter your Name'),
  fname: Yup.string()
    .required()
    .min(3, 'please enter your Father Name'),
  mname: Yup.string()
    .required()
    .min(3, 'please enter your Mother Name'),

  //date: Yup.date().required(),
  mstatus: Yup.string().required(),
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
  mphone: Yup.number()
    .min(10, 'Please enter 10 digit number')
    .required(),
  address: Yup.string().required(),

  religion: Yup.string().required(),
  village: Yup.string().required(),
  block: Yup.string().required(),
  district: Yup.string().required(),
  technicaleducation: Yup.string().required(),
  technicaleducationdomain: Yup.string().required(),
  schooleducation: Yup.string().required(),
  charges: Yup.string().required(),
  gender: Yup.string().required(),
  star: Yup.boolean()
    .required()
    .oneOf([true]),
});

export default class AdditionalRegisterServiceProviderPage extends Component {
  static navigationOptions = {
    title: 'SIGN UP',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#45425d',
    },
    headerTitleStyle: {
      fontWeight: '200',

      color: '#fff',


      fontSize: 18,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      initialValues: null,
    };
  }

  openModal() {
    this.setState({modalVisible: true});
  }

  closeModal() {
    this.setState({modalVisible: false});
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
  writeUserData = value => {
    let newData = {
      aadhar: value.aadhar,
      candidatename: value.name,
    };

    //var value = this.refs.form.getValue();
  };

  render() {
    var Gender = [
      {
        value: 'Male',
      },
      {
        value: 'Female',
      },
      {
        value: 'Others',
      },
    ];
    var MaritalStatus = [
      {
        value: 'Married',
      },
      {
        value: 'UnMarrid',
      },
    ];
    return (
      <Container>
        <Content>
          <View style={{flex: 1}}>
            <ProgressSteps>
              <ProgressStep label="First Step">
                <View style={{height: '100%'}}>
                  <Formik
                    onSubmit={values => alert(JSON.stringify(values, null, 2))}
                    validationSchema={validationSchema}
                    initialValues={{star: true}}>
                    {props => {
                      return (
                        <Form>
                          <View
                            style={{
                              marginBottom: hp('9%'),
                              marginLeft: hp('4%'),
                            }}>
                            <MyInput
                              label="Aadhar Number"
                              name="aadhar"
                              type="aadhar"
                            />
                            <MyInput
                              label="Candidate Name"
                              name="name"
                              type="name"
                            />
                            <MySelect
                              label="Gender"
                              name="gender"
                              type="gender"
                              data={Gender}
                            />
                            <MyInput
                              label="Father Name"
                              name="fname"
                              type="fname"
                            />
                            <MyInput
                              label="Mother Name"
                              name="mname"
                              type="mname"
                            />
                            <MyInput
                              label="Mobile Number"
                              name="phone"
                              type="number"
                            />

                            <View style={styles.buttonStyle}>
                              <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={props.handleSubmit}>
                                <Text
                                  style={{
                                    fontSize: 20,
                                    color: '#FFFFFF',
                                    marginLeft: hp('15%'),
                                    fontFamily: 'Railway',
                                    marginBottom: wp('1%'),
                                  }}>
                                  SAVE
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </Form>
                      );
                    }}
                  </Formik>
                </View>
              </ProgressStep>
              <ProgressStep label="Second Step">
                <View>
                  <Formik
                    onSubmit={values => alert(JSON.stringify(values, null, 2))}
                    validationSchema={validationSchema}
                    initialValues={{star: true}}>
                    {props => {
                      return (
                        <Form>
                          <View style={{padding: 20, marginLeft: hp('4%')}}>
                            <ScrollView>
                              <MyInput
                                label="Parents Mobile Number"
                                name="mphone"
                                type="number"
                              />
                              <MyInput
                                label="Minimun Charges"
                                name="charges"
                                type="charges"
                              />
                              <FocusedDatePicker
                                label="Date Of Birth"
                                name="date"
                                type="date"
                                mode="date"
                              />
                              <MySelect
                                label="Maritial Status"
                                name="MaritialStatus"
                                type="MaritialStatus"
                                data={MaritalStatus}
                              />
                              <MyInput
                                label="School Education"
                                name="schooleducation"
                                type="schooleducation"
                              />
                              <MyInput
                                label="Technical Education"
                                name="technicaleducation"
                                type="technicaleducation"
                              />
                              <View style={styles.buttonStyle}>
                                <TouchableOpacity
                                  style={styles.buttonStyle}
                                  onPress={props.handleSubmit}>
                                  <Text
                                    style={{
                                      fontSize: 20,
                                      color: '#FFFFFF',
                                      marginLeft: hp('15%'),
                                      fontFamily: 'Railway',
                                      marginBottom: wp('1%'),
                                    }}>
                                    SAVE
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </ScrollView>
                          </View>
                        </Form>
                      );
                    }}
                  </Formik>
                </View>
              </ProgressStep>
              <ProgressStep
                label="Third Step"
                onSubmit={() => {
                  this.props.navigation.navigate('ServiceProviderHomePage',{navigation:this.props.navigation.state.params.navigation});
                }}>
                <View>
                  <Formik
                    onSubmit={values => alert(JSON.stringify(values, null, 2))}
                    validationSchema={validationSchema}
                    initialValues={{star: true}}>
                    {props => {
                      return (
                        <Form>
                          <View style={{padding: 20, marginLeft: hp('4%')}}>
                            <ScrollView>
                              <MyInput
                                label="Technical Education Domain"
                                name="technicaleducationdomain"
                                type="technicaleducationdomain"
                              />
                              <MyInput
                                label="District"
                                name="district"
                                type="district"
                              />
                              <MyInput
                                label="Block"
                                name="block"
                                type="block"
                              />
                              <MyInput
                                label="Village"
                                name="village"
                                type="village"
                              />
                              <MyInput
                                label="Address"
                                name="address"
                                type="address"
                              />
                              <MyInput
                                label="Religion"
                                name="religion"
                                type="religion"
                              />
                              {/* <Text>{JSON.stringify(props, null, 2)}</Text> */}
                              <View style={styles.buttonStyle}>
                                <TouchableOpacity
                                  style={styles.buttonStyle}
                                  onPress={props.handleSubmit}>
                                  <Text
                                    style={{
                                      fontSize: 20,
                                      color: '#FFFFFF',
                                      marginLeft: hp('15%'),
                                      fontFamily: 'Railway',
                                      marginBottom: wp('1%'),
                                    }}>
                                    SAVE
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </ScrollView>
                          </View>
                        </Form>
                      );
                    }}
                  </Formik>
                </View>
              </ProgressStep>
            </ProgressSteps>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  innerContainer: {
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: hp('1%'),
    height: hp('7%'),
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp('80%'),
    backgroundColor: 'black',
  },
});

//make this component available to the app
