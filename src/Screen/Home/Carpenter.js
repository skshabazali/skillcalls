//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import {compose} from 'recompose';
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
  withFormikControl,
} from 'react-native-formik';
import {TextField} from 'react-native-material-textfield';
import * as Yup from 'yup';
import DatePicker from '../../component/DatePicker';
//import Switch from './Switch';

const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput,
)(TextField);
// eslint-disable-next-line no-undef
const Form = withNextInputAutoFocusForm(ScrollView, {
  submitAfterLastInput: false,
});
const FocusedDatePicker = compose(
  withFormikControl,
  withNextInputAutoFocusInput,
)(DatePicker);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string()
    .required()
    .min(6, 'Too short'),
  star: Yup.boolean()
    .required()
    .oneOf([true]),
});
// import {compose} from 'recompose';
// import {Formik} from 'formik';
// import * as Yup from 'yup';
// import {
//   handleTextInput,
//   withNextInputAutoFocusForm,
//   withNextInputAutoFocusInput,
// } from 'react-native-formik';
// import {TextField} from 'react-native-material-textfield';

// const MyInput = compose(
//   handleTextInput,
//   withNextInputAutoFocusInput,
// )(TextField);
// const Form = withNextInputAutoFocusForm(View);

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .required('please! email?')
//     .email("well that's not an email"),
//   password: Yup.string()
//     .required()
//     .min(2, 'pretty sure this will be hacked'),
// });

// create a component
class carpenter extends Component {
  static navigationOptions = {
    title: 'Carpenters',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#45425d',
    },
    headerTitleStyle: {
      fontWeight: '200',

      color: '#ffffff',

      fontFamily: 'Railway',

      fontSize: 18,
    },
  };
  render() {
    return (
      <View>
        {/* <Formik
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
          render={props => {
            return (
              <Form>
                <MyInput label="Email" name="email" type="email" />
                <MyInput label="Password" name="password" type="password" />
                <MyInput label="First Name" name="firstName" type="name" />
                <MyInput label="Last Name" name="lastName" type="name" />
                <Button onPress={props.handleSubmit} title="SUBMIT" />
              </Form>
            );
          }}
        /> */}
        <Formik
          onSubmit={values => alert(JSON.stringify(values, null, 2))}
          validationSchema={validationSchema}
          initialValues={{star: true}}>
          {props => {
            return (
              <Form style={{padding: 10}}>
                <MyInput label="Email" name="email" type="email" />
                <MyInput label="Password" name="password" type="password" />
                {/* <Switch
                  label="If you like the repo, have you starred it 😁?"
                  name="star"
                /> */}
                <FocusedDatePicker label="Birthday" name="birthday" />

                <Button onPress={props.handleSubmit} title="SUBMIT" />
                <Text>{JSON.stringify(props, null, 2)}</Text>
              </Form>
            );
          }}
        </Formik>
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
export default carpenter;
//import liraries
// import React, {Component} from 'react';
// import {View} from 'react-native';
// import {LoginButton, AccessToken} from 'react-native-fbsdk';

// export default class carpenter extends Component {
//   render() {
//     return (
//       <View>
//         <LoginButton
//           onLoginFinished={(error, result) => {
//             if (error) {
//               console.log('login has error: ' + result.error);
//             } else if (result.isCancelled) {
//               console.log('login is cancelled.');
//             } else {
//               AccessToken.getCurrentAccessToken().then(data => {
//                 console.log(data.accessToken.toString());
//               });
//             }
//           }}
//           onLogoutFinished={() => console.log('logout.')}
//         />
//       </View>
//     );
//   }
// }
